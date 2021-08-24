import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import schema from './schema'

import {
  DynamoDBClient,
  ScanCommand,
  ScanOutput,
} from '@aws-sdk/client-dynamodb'
import { InternalServerError } from 'http-errors'
import { commonMiddleware } from '@libs/commonMiddleware'
const dynamoDbClient = new DynamoDBClient({})

const getAuctions: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  let auctions: ScanOutput['Items']

  try {
    const command = new ScanCommand({ TableName: process.env.AUCTIONS_TABLE })
    const result = await dynamoDbClient.send(command)
    auctions = result.Items
  } catch (e) {
    console.error(e)
    throw new InternalServerError(e)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(auctions),
  }
}

export const main = commonMiddleware(getAuctions)
