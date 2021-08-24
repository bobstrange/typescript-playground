import middy from '@middy/core'
import httpJsonBodyParser from '@middy/http-json-body-parser'

export const commonMiddleware = (handler) => {
  return middy(handler).use([httpJsonBodyParser()])
}
