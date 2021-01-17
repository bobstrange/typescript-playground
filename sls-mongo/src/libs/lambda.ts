import middy from '@middy/core'
import middyJsonBodyParser from '@middy/http-json-body-parser'
import { mongoose } from '@typegoose/typegoose'

export const middyfy = (handler) => {
  return middy(handler).use(middyJsonBodyParser())
}

export const useConnectionMiddleware: middy.Middleware<{
  conn: () => mongoose.Mongoose
  stg: 'prod' | 'stg' | 'dev'
}> = (config) => {
  return {
    after: (_, next) => {
      if (config?.stg === 'dev') {
        console.log('Disconnect')
        config?.conn().disconnect()
      }
      next()
    },
    before: (handler, next) => {
      handler.context.callbackWaitsForEmptyEventLoop = false
      next()
    },
  }
}
