import { Prisma } from "@prisma/client";
import { AppContext, WorkerContext } from "@/context.js";
import { Codec, JSONCodec, Msg } from "nats";

const GATE = "exists"
const EXISTS_BY_UID = `service.user-mgmt.${GATE}.by.uid`
const EXISTS_BY_EMAIL = `service.user-mgmt.${GATE}.by.email`

const codec = JSONCodec<{ ok: boolean, code: number, result?: boolean }>()

export default async function Worker_Exists_Create(ctx: AppContext) {
    return await Promise.all([
        workerByUID(new WorkerContext(ctx, ctx.nc.subscribe(
            EXISTS_BY_UID + ".*", { queue: EXISTS_BY_UID }
        ))),
        workerByEmail(new WorkerContext(ctx, ctx.nc.subscribe(EXISTS_BY_EMAIL, { queue: EXISTS_BY_EMAIL })))
    ])
}

async function existsByFields(ctx: WorkerContext, msg: Msg, fields: any, codec: Codec<{ ok: boolean, code: number, result?: boolean }>) {
    try {
        const _ = await ctx.prisma.user.findUniqueOrThrow({where: {...fields}, select: {uid: true}})
        msg.respond(codec.encode({ ok: true, code: 0, result: true }))
    } catch (err: any) {
        if (err.code === 'P2025') {
            return msg.respond(codec.encode({ ok: true, code: 0, result: false }))
        } else {
            return msg.respond(codec.encode({ ok: true, code: 1 }))
        }
    }
}

async function workerByUID(ctx: WorkerContext) {

    const handler = async (msg: Msg) => {
        const { subject } = msg
        const uid = subject.substring(EXISTS_BY_UID.length + 1)
        return await existsByFields(ctx, msg, { uid }, codec)
    }

    for await (const msg of ctx.subscription) {
        handler(msg)
    }
}

async function workerByEmail(ctx: WorkerContext) {
    const reqCodec = JSONCodec<{email: string}>()
    const handler = async (msg: Msg) => {
        const { email } = reqCodec.decode(msg.data)
        return await existsByFields(ctx, msg, { email }, codec)
    }

    for await (const msg of ctx.subscription) {
        handler(msg)
    }
}


