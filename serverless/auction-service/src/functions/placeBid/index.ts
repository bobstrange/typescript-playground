import type { AWS } from '@serverless/typescript'

import schema from './schema'
import { handlerPath } from '@libs/handlerResolver'

export const placeBid: AWS['functions'][string] = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'patch',
        path: 'auctions/{id}/bid',
        request: {
          schema: {
            'application/json': schema,
          },
        },
      },
    },
  ],
}
