import nats, { Empty, JSONCodec, Msg } from 'nats'
import * as pb from './proto/index.js'
import { TxnAlreadyExistsError, createTransaction } from './transaction.js'

export const START_PROCESS_SUBJECT_NAME = "service.user-creation.1"
export const VERIFY_OTP_SUBJECT_NAME = "service.user-creation.*.*"

const NATS_PORT = 4222

const conn = await nats.connect({
    servers: [`localhost:${NATS_PORT}`]
})
console.log("successfully connected to NATS ...")

// Add SIGINT hook.
process.on("SIGINT", async () => {
    console.log("initiating shutdown ...")
    // Start draining the connection.
    await conn.drain()
})

import StatusCode = pb.pollify.proto.StatusCode
import ErrorCode = pb.pollify.proto.service.user_creation.ErrorCode

async function startProcess(sub: nats.Subscription) {
    const jsonCodec = JSONCodec<{ uid: string, email: string, password: string }>();
    const codec = JSONCodec<any>()

    const Response = pb.pollify.proto.service.user_creation.ActionOneResponse

    const handler = async (msg: Msg) => {
        const { data } = msg
        const req = jsonCodec.decode(data)

        const errors: ErrorCode[] = [];

        // Check if an user exists with the given uid.
        let reply = await conn.request("service.user-mgmt.exists.by.uid." + req.uid, Empty)
        let res = codec.decode(reply.data) as { ok: boolean, code: number, result?: boolean }
        if (!res.ok) {
            return msg.respond(Response.encode({ ok: false, code: StatusCode.INTERNAL_ERROR }).finish())
        } else if (res.result) {
            errors.push()
        }

        if (errors.length) {
            return msg.respond(Response.encode({ ok: false, code: StatusCode.FAILED, errors }).finish())
        }

        // Create the transaction.
        try {
            const txnId = await createTransaction({ uid: req.uid, email: req.email, password: req.password, secret: "hola" })
            return msg.respond(Response.encode({ ok: true, code: StatusCode.OK, txnId }).finish())
        } catch (err) {
            if (err instanceof TxnAlreadyExistsError) {
                return msg.respond(Response.encode({ ok: false, code: StatusCode.FAILED, errors: [ErrorCode.TXN_ALREADY_EXISTS] }).finish())
            } else {
                return msg.respond(Response.encode({ ok: false, code: StatusCode.INTERNAL_ERROR }).finish())
            }
        }
    }

    for await (const msg of sub) {
        handler(msg)
    }
}

console.log("starting the workers ...")
const startProcessSub = conn.subscribe(START_PROCESS_SUBJECT_NAME)
const verifyOtp = conn.subscribe(VERIFY_OTP_SUBJECT_NAME)

startProcess(startProcessSub)

const err = await conn.closed()
if (err) {
    console.error("error while closing NATS connection !\n", err)
}

console.log("shutdown complete ...")