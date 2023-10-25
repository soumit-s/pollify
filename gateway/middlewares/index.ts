import { AppContext } from "../context";
import express, { NextFunction } from 'express'

export function initMiddlewares(ctx: AppContext) {
    ctx.app.use(useAppContext(ctx))
    ctx.app.use(express.json())
}

function useAppContext(ctx: AppContext) {
    return (req: any, _, next: NextFunction) => {
        req.ctx = ctx
        next()
    }
}