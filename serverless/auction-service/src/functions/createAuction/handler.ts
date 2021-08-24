import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import middy from '@middy/core'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import { InternalServerError } from 'http-errors'

import { formatJSONResponse } from '@libs/apiGateway'
import { v4 as uuid } from 'uuid'
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'

const dynamoDbClient = new DynamoDBClient({})

import schema from './schema'
const createAuction: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const { title } = event.body
  const auction = {
    id: uuid(),
    title,
    status: 'OPEN',
    createdAt: new Date().toISOString(),
  }
  const command = new PutItemCommand({
    TableName: 'AuctionsTable',
    Item: {
      id: { S: auction.id },
      title: { S: auction.title },
      status: { S: auction.status },
      createdAt: { S: auction.createdAt },
    },
  })

  try {
    await dynamoDbClient.send(command)
  } catch (error) {
    console.error(error)
    throw new InternalServerError(error)
  }

  return formatJSONResponse(
    {
      auction,
    },
    201
  )
}

export const main = middy(createAuction).use(httpJsonBodyParser())
