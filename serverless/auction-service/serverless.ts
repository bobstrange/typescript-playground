import type { AWS } from '@serverless/typescript'

import { createAuction } from '@functions/createAuction'
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
    },
    lambdaHashingVersion: '20201221',
    memorySize: 128,
    stage: "${opt:stage, 'dev'}",
    region: 'ap-northeast-1',
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: ['dynamodb:PutItem'],
        Resource: [
          'arn:aws:dynamodb:${aws:region}:${aws:accountId}:table/AuctionsTable',
        ],
      },
    ],
  },
  resources: {
    Resources: { AuctionsTable },
  },
  functions: { createAuction },
}

module.exports = serverlessConfiguration
