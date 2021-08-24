import type { AWS } from '@serverless/typescript'

import schema from './schema'
import { handlerPath } from '@libs/handlerResolver'

export const getAuctions: AWS['functions'][string] = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'auction',
        request: {
          schema: {
            'application/json': schema,
          },
        },
      },
    },
  ],
}
