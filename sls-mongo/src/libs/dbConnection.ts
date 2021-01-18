import { MongoClient } from 'mongodb'
import { db } from '~libs/environment'

export type DBSession = {
  client?: MongoClient
}

export async function ensureConnection(session: DBSession): Promise<void> {
  if (session.client) {
    return
  }
  session.client = await connect(db.host, db.port, db.user, db.password)
}

async function connect(
  host: string,
  port?: string,
  user?: string,
  password?: string
): Promise<MongoClient> {
  let url = 'mongodb://'
  if (user && password) {
    url = `${url}${user}:${password}@`
  }
  url = `${url}${host}`
  if (port) {
    url = `${url}:${port}`
  }
  return await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
