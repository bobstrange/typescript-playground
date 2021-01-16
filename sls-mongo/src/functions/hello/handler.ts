import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '~libs/apiGateway'
import { formatJSONResponse } from '~libs/apiGateway'
import { middyfy } from '~libs/lambda'

import schema from './schema'

import { fetchUsersByName } from '~/services/user.service'
import { mongoose } from '@typegoose/typegoose'
import { ensureConnection } from '~/libs/dbConnection'

let conn: mongoose.Mongoose

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event,
  context
) => {
  context.callbackWaitsForEmptyEventLoop = false

  if (!conn) {
    conn = await ensureConnection(conn)
  }
  return formatJSONResponse({
    users: await fetchUsersByName(event.body.name),
  })
}

export const main = middyfy(hello)
