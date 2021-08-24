import type { AWS } from '@serverless/typescript'

import schema from './schema'
import { handlerPath } from '@libs/handlerResolver'

export const getAuction: AWS['functions'][string] = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'auctions/{id}',
        // request: {
        //   schema: {
        //     'application/json': schema,
        //   },
        // },
      },
    },
  ],
}
