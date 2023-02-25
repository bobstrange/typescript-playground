declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
    PORT?: string
    SLACK_BOT_TOKEN?: string
    SLACK_SIGNING_SECRET?: string
    APP_TOKEN?: string
  }
}
