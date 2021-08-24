import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import middy from '@middy/core'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import schema from './schema'

import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb'
import { InternalServerError, NotFound } from 'http-errors'
const dynamoDbClient = new DynamoDBClient({})

const getAuction: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const { id } = event.pathParameters

  let auction

  try {
    const command = new GetItemCommand({
      TableName: process.env.AUCTIONS_TABLE,
      Key: { id: { S: id } },
    })
    const result = await dynamoDbClient.send(command)
    auction = result.Item
  } catch (e) {
    console.error(e)
    throw new InternalServerError(e)
  }

  if (!auction) {
    throw new NotFound(`Auction ${id} not found`)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(auction),
  }
}

export const main = middy(getAuction).use(httpJsonBodyParser())
