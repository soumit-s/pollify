import { Response } from "express"
import { AppRequest } from "@/context/index.js"
import { UserJoinRequestSchema } from "@/schemas/user-join-schema.js"
import { StatusCodes } from "http-status-codes"
import { JSONCodec } from "nats"
import { pollify } from "@/proto/index.js"

import ErrorCode = pollify.proto.service.user_creation.ErrorCode

export default async function Api_v1_join(req: AppRequest, res: Response) {
    const { uid } = req.query
    const { error } = UserJoinRequestSchema.validate(req.body)

    // Validate the schema.
    if (error) {
        const errors = error.details.map(({ context: { key, value } }) => ({ fieldName: key, msg: value }))
        return res.status(StatusCodes.BAD_REQUEST).json({ ok: false, code: 0, errors })
    }

    // Send the request to the user creation process.
    const codec = JSONCodec<{ uid: string, email: string, password: string }>()
    const reply = await req.ctx.conn.request("service.user-creation.1", codec.encode({
        uid: uid as string,
        email: req.body.email,
        password: req.body.password,
    }), { timeout: 2000 })


    const r = pollify.proto.service.user_creation.ActionOneResponse.decode(reply.data)
    if (!r.ok) {
        switch (r.code) {
            case pollify.proto.StatusCode.FAILED:
                const errors = r.errors.reduce((p: any, code: ErrorCode) => {
                    switch (code) {
                        case ErrorCode.UID_ALREADY_TAKEN:
                        case ErrorCode.TXN_ALREADY_EXISTS:
                            p.uid = [{code, msg: "ID already in use."}, ...p.uid || []]
                            break
                        case ErrorCode.EMAIL_ALREADY_TAKEN:
                            p.email = [{code, msg: "Another user exists with this email."}]
                    }
                    return p
                }, {})
                return res.json({ ok: false, errors })
            default:
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ ok: false })
        }
    }

    return res.json({ ok: true, txnId: r.txnId })
}