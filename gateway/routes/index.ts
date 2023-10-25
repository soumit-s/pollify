import { StatusCodes } from "http-status-codes";
import Api_v1_join from "./api.v1.join.js";
import { AppContext, AppRequest } from "@/context/index.js";
import { Response, Request } from 'express';

export function initRoutes(ctx: AppContext) {
    ctx.app.post("/api/v1/join", wrapHandler(Api_v1_join))
    // ctx.app.post("/api/v1/verify", async (req: Request, res: Response) => {

    // })

    // ctx.app.post("/api/v1/auth", (req: Request, res: Response) => {
    //     const { uid } = req.query
    // })
}

type RouteHandler<T extends Request> = (req: T, res: Response) => any; 

function wrapHandler(handler: RouteHandler<AppRequest>): RouteHandler<AppRequest> {
    return (req: AppRequest, res: Response) => {
        handler(req, res).catch((err: any) => {
            console.error("recovered from following error ... \n", err)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ok: false})
        })
    }
}


