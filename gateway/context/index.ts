import { NatsConnection } from "nats";
import { Express, Request } from "express";

export class AppContext {
    private _conn: NatsConnection
    private _app: Express

    constructor({app, conn}: {app: Express, conn: NatsConnection}) {
        this._conn = conn
        this._app = app
    }

    get conn(): NatsConnection { return this._conn }
    get app(): Express { return this._app }
}

export type AppRequest = Request & { ctx: AppContext }