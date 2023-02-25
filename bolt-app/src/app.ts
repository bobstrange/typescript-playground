import { token, signingSecret, appToken, port } from './utils/env'
import { App, LogLevel, AppOptions, AwsLambdaReceiver } from '@slack/bolt'

let options: AppOptions = {
  token,
  port,
}

if (process.env.NODE_ENV === 'production') {
  const receiver = new AwsLambdaReceiver({
    signingSecret,
  })
  options.receiver = receiver
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

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  // Filter out message events with subtypes (see https://api.slack.com/events/message)
  if (message.subtype === undefined || message.subtype === 'bot_message') {
    // say() sends a message to the channel where the event was triggered
    await say({
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Hey there <@${message.user}>!`,
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Click Me',
            },
            action_id: 'button_click',
          },
        },
      ],
      text: `Hey there <@${message.user}>!`,
    })
  }
})

app.action('button_click', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack()
  await say(`<@${body.user.id}> clicked the button`)
})
;(async () => {
  // Start your app
  await app.start(Number(process.env.PORT) || 3000)

  console.log('⚡️ Bolt app is running!')
})()
