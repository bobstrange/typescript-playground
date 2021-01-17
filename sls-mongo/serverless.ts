import type { AWS } from '@serverless/typescript'
import * as minimist from 'minimist'

import { hello } from './src/functions'

const argv = minimist(process.argv.slice(2))
switch (argv.stage) {
  case 'prod':
    console.log('Load prod config')
    break
  case 'stg':
    console.log('Load stg config')
    break

  case 'dev':
  default:
    console.log('Load dev config')
    break
}

const serverlessConfiguration: AWS = {
  service: 'sls-mongo',
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
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      DB_HOST: '${env: DB_HOST}',
      DB_PORT: '${env: DB_PORT}',
      DB_USER: '${env: DB_USER}',
      DB_PASSWORD: '${env: DB_PASSWORD}',
      DB_NAME: '${env: DB_NAME}',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: { hello },
}

module.exports = serverlessConfiguration
