import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import schema from './schema'

import {
  DynamoDBClient,
  UpdateItemCommand,
  UpdateItemOutput,
} from '@aws-sdk/client-dynamodb'
import { commonMiddleware } from '@libs/commonMiddleware'
import { Forbidden, InternalServerError } from 'http-errors'
import { getAuctionById } from '@functions/getAuction/handler'
const dynamoDbClient = new DynamoDBClient({})

const placeBid: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const { id } = event.pathParameters
  const { amount } = event.body

  const currentAuction = await getAuctionById(id)
  const currentBidAmount = currentAuction.highestBid.M?.amount?.N
  if (
    currentBidAmount &&
    typeof currentBidAmount === 'string' &&
    parseInt(currentBidAmount) > amount
  ) {
    throw new Forbidden(`Your bid must be higher than ${currentBidAmount}`)
  }

  let updatedAuction: UpdateItemOutput['Attributes']

  try {
    const command = new UpdateItemCommand({
      TableName: process.env.AUCTIONS_TABLE,
      Key: { id: { S: id } },
      UpdateExpression: 'SET highestBid.amount = :amount',
      ExpressionAttributeValues: {
        ':amount': { N: amount.toString() },
      },
      ReturnValues: 'ALL_NEW',
    })
    const result = await dynamoDbClient.send(command)
    updatedAuction = result.Attributes
  } catch (error) {
    console.error(error)
    throw new InternalServerError(error)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(updatedAuction),
  }
}

export const main = commonMiddleware(placeBid)
