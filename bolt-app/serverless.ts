import { AWS } from '@serverless/typescript'

const environment = {
  SLACK_SIGNING_SECRET: '${env:SLACK_SIGNING_SECRET}',
  SLACK_BOT_TOKEN: '${env:SLACK_SIGNING_SECRET}',
}

const provider: AWS['provider'] = {
  name: 'aws',
  runtime: 'nodejs18.x',
  environment,
}
const plugins = ['serverless-esbuild', 'serverless-offline']

const functions: AWS['functions'] = {
  slack: {
    handler: '',
    events: [
      {
        http: {
          path: 'slack/events',
          method: 'post',
        },
      },
    ],
  },
}

const config: AWS = {
  service: 'bolt-app',
  frameworkVersion: '3',
  provider,
  plugins,
  functions,
}

module.exports = config
