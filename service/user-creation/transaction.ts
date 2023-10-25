import { createHash } from "crypto"
import { WatchError, createClient } from "redis"

export class TxnAlreadyExistsError extends Error {
    private _txnId: string
    
    constructor(txnId: string) {
        super(`transaction id '${txnId}' already exists !`)
        this._txnId = txnId
    }

    public getTxnId(): string {
        return this._txnId
    }
}

// Create the redis client.
const client = await createClient({ database: 1 })
    .on('error', e => {
        console.error("failed to connect to REDIS database ...", e)
        process.emit("SIGINT")
    }
    )
    .on('ready', _ => { console.log("successfully connected to REDIS database ...") })
    .on('reconnecting', _ => { console.log("lost connection to REDIS database ! reconnecting ...") })
    .on('end', _ => { console.log("successfully closed connection to REDIS database ...") })
    .connect()

process.on('SIGINT', async () => {
    console.log('closing connection to redis ...')
    const msg = await client.quit()
    console.log(`redis said '${msg}'`)
})

export function getTransactionSecret(id: string): string {
    return ""
}

export async function createTransaction(data: { uid: string, email: string, password: string, secret: string }): Promise<string> {
    const hash = createHash('sha256')
    hash.update(data.uid)
    const txnId = hash.digest('hex')

    await client.executeIsolated(async c => {
        try {
            await c.watch(txnId)
            
            // Check if a transaction with the given key already exists.
            if (await c.exists(txnId)) {
                throw new TxnAlreadyExistsError(txnId)
            }

            const multi = c.multi();

            multi
                .hSet(txnId, 'uid', data.uid)
                .hSet(txnId, 'email', data.email)
                .hSet(txnId, 'password', data.password)
                .hSet(txnId, 'secret', '')
                .exec()
        } catch(err) {
            if (err instanceof WatchError) {
                throw new TxnAlreadyExistsError(txnId)   
            } else {
                throw err
            }
        }
    })

    return txnId
}
