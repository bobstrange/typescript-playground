import {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
} from './config/environments'

import * as Mongodb from './modules/mongodb'

Mongodb.init({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
})

import { app } from './app'

app.listen(3000, () => {
  console.log('listening port 3000')
})
