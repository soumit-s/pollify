import nats  from 'nats'
import dotenv from 'dotenv'

import {PrismaClient} from '@prisma/client'
import Worker_UserMgmt_Create from '@/workers/create.js'
import { AppContext } from '@/context.js'
import Worker_Exists_Create from '@/workers/exists.js'

const loadConfig = () => {
    const {error} = dotenv.config()
    if (error) {
        console.error(`failed to load .env file !`)
        process.exit(-1)
    }
}

// Listens for Ctrl+C.
// Drains the connection and initiates shutdown.
process.on("SIGINT", async () => {
    console.log("initiating service sutdown ...")
    console.log("draining and closing connection ...")    
    await conn.drain()
})

// Load the configuration file.
loadConfig()

// Connect to NATS.
const conn = await nats.connect({
    servers: [process.env.NATS_URL as string],
})

console.log("successfully connected to NATS ...")

// Connect to prisma
const prisma = new PrismaClient()

// Create the Application Context.
const app = new AppContext(conn, prisma)

// Create the subscribers.
Worker_UserMgmt_Create(app)
Worker_Exists_Create(app)

// Wait for the connection to close.
await (async () => {
    const err = await conn.closed()
    if (err) {
        console.error("error while draining connection ...", err)
    }
})()

console.log("completed service shutdown ...")