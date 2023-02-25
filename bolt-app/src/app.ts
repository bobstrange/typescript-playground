import { App, LogLevel, AppOptions, AwsLambdaReceiver } from '@slack/bolt'
import { AwsHandler } from '@slack/bolt/dist/receivers/AwsLambdaReceiver'
import { token, signingSecret, appToken, port } from './utils/env'
import { helloHandler } from './handlers'

let options: AppOptions = {
  token,
  port,
}

const awsLambdaHandler = new AwsLambdaReceiver({
  signingSecret,
})

if (process.env.NODE_ENV === 'production') {
  options.receiver = awsLambdaHandler
  options.logLevel = LogLevel.WARN
} else {
  options.signingSecret = signingSecret
  options.logLevel = LogLevel.DEBUG
  options.appToken = appToken
  options.socketMode = true
}

const app = new App(options)

app.use(async ({ next }) => {
  await next()
})

app.message('hello', helloHandler)

app.action('button_click', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack()
  await say(`<@${body.user.id}> clicked the button`)
})

export { app }

export const handler: AwsHandler = async (event, context, callback) => {
  const handler = await awsLambdaHandler.start()
  return handler(event, context, callback)
}
