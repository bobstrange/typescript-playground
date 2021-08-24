import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import middy from '@middy/core'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import schema from './schema'

import {
  DynamoDBClient,
  ScanCommand,
  ScanOutput,
} from '@aws-sdk/client-dynamodb'
const dynamoDbClient = new DynamoDBClient({})

const createAuction: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  let auctions: ScanOutput['Items']

  try {
    const command = new ScanCommand({ TableName: process.env.AUCTIONS_TABLE })
    const result = await dynamoDbClient.send(command)
    auctions = result.Items
  } catch (e) {
    console.error(e)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(auctions),
  }
}

export const main = middy(createAuction).use(httpJsonBodyParser())
