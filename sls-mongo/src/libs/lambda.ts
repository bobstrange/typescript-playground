import middy from '@middy/core'
import middyJsonBodyParser from '@middy/http-json-body-parser'
import { DBSession } from './dbConnection'

export const middyfy = (handler) => {
  return middy(handler).use(middyJsonBodyParser())
}

export const mongoConnectionMiddleware: middy.Middleware<{
  session: DBSession
  stg: 'prod' | 'stg' | 'dev'
}> = (config) => {
  return {
    after: (_, next) => {
      if (config?.stg === 'dev') {
        console.log('Disconnect')
        config?.session.client?.isConnected() ?? config?.session.client?.close()
      }
      next()
    },
    before: (handler, next) => {
      handler.context.callbackWaitsForEmptyEventLoop = false
      next()
    },
  }
}
