import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '~libs/apiGateway'
import { formatJSONResponse } from '~libs/apiGateway'
import { mongoConnectionMiddleware, middyfy } from '~libs/lambda'

import schema from './schema'

import { ensureConnection, DBSession } from '~/libs/dbConnection'

const session: DBSession = {}

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  await ensureConnection(session)
  const db = session.client?.db('dev')
  const users = await db
    ?.collection('users')
    .find({
      name: event.body.name,
    })
    .toArray()
  return formatJSONResponse({
    users,
  })
}

export const main = middyfy(hello).use(
  mongoConnectionMiddleware({
    session,
    stg: 'dev',
  })
)
