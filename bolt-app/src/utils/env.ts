import * as dotenv from 'dotenv'
dotenv.config()

if (!process.env.SLACK_BOT_TOKEN) {
  throw new Error('SLACK_BOT_TOKEN is not defined')
}

if (!process.env.SLACK_SIGNING_SECRET) {
  throw new Error('SLACK_SIGNING_SECRET is not defined')
}

export const token = process.env.SLACK_BOT_TOKEN
export const signingSecret = process.env.SLACK_SIGNING_SECRET
export const appToken = process.env.SLACK_APP_TOKEN
export const port = Number(process.env.PORT || 3000)
