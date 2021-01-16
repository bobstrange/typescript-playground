import { mongoose } from '@typegoose/typegoose'
import { db } from '~libs/environment'

export async function ensureConnection(
  conn: mongoose.Mongoose
): Promise<mongoose.Mongoose> {
  if (conn) {
    return await (() => conn)()
  }
  return connect(db.host, db.name, db.port, db.user, db.password)
}

async function connect(
  host: string,
  dbName: string,
  port?: string,
  user?: string,
  password?: string
) {
  let url = 'mongodb://'
  if (user && password) {
    url = `${url}${user}:${password}@`
  }
  url = `${url}${host}`
  if (port) {
    url = `${url}:${port}`
  }
  return await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName,
  })
}
