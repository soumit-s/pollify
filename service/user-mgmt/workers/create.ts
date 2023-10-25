import { JSONCodec } from "nats";
import { AppContext, WorkerContext } from "@/context.js";

export default async function Worker_UserMgmt_Create(ctx: AppContext) {
    return await worker(new WorkerContext(
        ctx,
        ctx.nc.subscribe("service.user-mgmt.create", {
            queue: 'service.user-mgmt.create'
        })
    ))
} 

export async function worker(ctx: WorkerContext) {
    const codec = getCodec()
    for await (const msg of ctx.subscription) {
        const data = codec.decode(msg.data)
        try {
            const user = await ctx.prisma.user.create({ data })
            msg.respond(codec.encode({ok: true, data: user}))
        } catch(e) {
            msg.respond(codec.encode({ok: false}))
        }
    }
}

function getCodec() {
    return JSONCodec<any>()
}