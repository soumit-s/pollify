import express, { Express } from 'express'
import { AppContext } from '@/context/index.js'
import nats from 'nats'
import { initMiddlewares } from '@/middlewares/index.js'
import { initRoutes } from '@/routes/index.js'

async function shutdownServer() {
    // Stop the server.
    try {
        await new Promise<void>((resolve, reject) => {
            server.close((err: Error) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })

    } catch (err) {
        console.error('error while closing server:', err)
    }
}

async function shutdownNatsConnection(ctx: AppContext) {
    console.log("draining the connection ...")
    // Start draining the connection.
    await ctx.conn.drain()
}

async function shutdown(ctx: AppContext) {
    // Shutdown the server.
    await shutdownServer()
    // Shutdown nats connection.
    await shutdownNatsConnection(ctx)
}

const port = 8000
const app: Express = express()

// Create the NATS connection.
const conn = await nats.connect({ servers: ['localhost:4222'] })
console.log("successfully connected to NATS ...")

// Add shutdown hook.

// Listens for Ctrl + C and initiates
// shutdown.
process.on("SIGINT", () => {
    shutdown(ctx)
})

// Create the application context.
const ctx: AppContext = new AppContext({ app, conn })

// Initialize the middlewares.
initMiddlewares(ctx)
initRoutes(ctx)


// Start the server.
const server = app.listen(port, (): void => {
    console.log(`successfully listening at port ${port}`)
});

await (async () => {
    // Wait for the connection to be closed.
    const err = await conn.closed()
    if (err) {
        console.error("error while trying to close NATS connection ...\n", err)
    }
    console.log("completed shutdown ...")
})();

