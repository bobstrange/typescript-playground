const host = process.env.DB_HOST
const port = process.env.DB_PORT
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const name = process.env.DB_NAME

if (!(host && name)) {
  throw new Error('Please specify DB_HOST and DB_NAME')
}

export const db = {
  host,
  port,
  user,
  password,
  name,
}
