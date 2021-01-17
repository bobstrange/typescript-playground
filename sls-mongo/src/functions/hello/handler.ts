import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '~libs/apiGateway'
import { formatJSONResponse } from '~libs/apiGateway'
import { useConnectionMiddleware, middyfy } from '~libs/lambda'

import schema from './schema'

import { fetchUsersByName } from '~/services/user.service'
import { mongoose } from '@typegoose/typegoose'
import { ensureConnection } from '~/libs/dbConnection'

let conn: mongoose.Mongoose

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  if (!conn) {
    conn = await ensureConnection(conn)
  }
  const users = await fetchUsersByName(event.body.name)
  return formatJSONResponse({
    users,
  })
}

export const main = middyfy(hello).use(
  useConnectionMiddleware({
    conn: () => {
      return conn
    },
    stg: 'dev',
  })
)
