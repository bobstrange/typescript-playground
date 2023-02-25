import { SlackEventMiddlewareArgs } from '@slack/bolt'

export const helloHandler = async ({ message, say }: SlackEventMiddlewareArgs<'message'>) => {
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
}
