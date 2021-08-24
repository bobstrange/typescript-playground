import type { AWS } from '@serverless/typescript'

import {
  createAuction,
  getAuctions,
  getAuction,
  placeBid,
} from '@functions/index'
import { AuctionsTable } from './serverless/AuctionsTable'

const serverlessConfiguration: AWS = {
  service: 'auction-service',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      AUCTIONS_TABLE: 'AuctionsTable',
    },
    lambdaHashingVersion: '20201221',
    memorySize: 128,
    stage: "${opt:stage, 'dev'}",
    region: 'ap-northeast-1',
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:PutItem',
          'dynamodb:Scan',
          'dynamodb:GetItem',
          'dynamodb:UpdateItem',
        ],
        Resource: [
          'arn:aws:dynamodb:${aws:region}:${aws:accountId}:table/AuctionsTable',
        ],
      },
    ],
  },
  resources: {
    Resources: { AuctionsTable },
  },
  functions: { createAuction, getAuctions, getAuction, placeBid },
}

module.exports = serverlessConfiguration
