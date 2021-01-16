import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '~libs/apiGateway'
import { formatJSONResponse } from '~libs/apiGateway'
import { middyfy } from '~libs/lambda'

import schema from './schema'

import { getGreetMessage } from '~services/hello.service'

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  return formatJSONResponse({
    message: getGreetMessage(event.body.name),
    event,
  })
}

export const main = middyfy(hello)
