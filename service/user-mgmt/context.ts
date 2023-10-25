import { PrismaClient } from "@prisma/client";
import { NatsConnection, Subscription } from "nats";

export class AppContext {
    private _prisma: PrismaClient
    private _nc: NatsConnection

    constructor(nc: NatsConnection, prisma: PrismaClient) {
        this._prisma = prisma
        this._nc = nc
    }

    // The Prisma Client.
    get prisma(): PrismaClient { return this._prisma  }

    // The NATS connection.
    get nc(): NatsConnection { return this._nc }
}

export class WorkerContext {
    private _appCtx: AppContext
    public subscription: Subscription

    constructor(appCtx: AppContext, sub: Subscription) {
        this._appCtx = appCtx
        this.subscription = sub
    }

    // Gets the App Context.
    get app(): AppContext { return this._appCtx }
    
    // Gets the Prisma Client.
    get prisma(): PrismaClient { return this._appCtx.prisma }
}