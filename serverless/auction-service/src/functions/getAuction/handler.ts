import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import schema from './schema'

import {
  DynamoDBClient,
  GetItemCommand,
  GetItemOutput,
} from '@aws-sdk/client-dynamodb'
import { InternalServerError, NotFound } from 'http-errors'
import { commonMiddleware } from '@libs/commonMiddleware'
const dynamoDbClient = new DynamoDBClient({})

export const getAuctionById = async (id: string) => {
  let auction: GetItemOutput['Item']

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

  return auction
}

const getAuction: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const { id } = event.pathParameters

  const auction = await getAuctionById(id)

  return {
    statusCode: 200,
    body: JSON.stringify(auction),
  }
}

export const main = commonMiddleware(getAuction)
