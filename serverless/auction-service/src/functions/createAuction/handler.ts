import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'

import schema from './schema'

const createAuction: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const { title } = event.body
  const auction = {
    title,
    status: 'OPEN',
    createdAt: new Date().toISOString(),
  }

  return formatJSONResponse(
    {
      auction,
    },
    201
  )
}

export const main = middyfy(createAuction)
