import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import path from 'path'

export const serve = ({
  port,
  filename,
  dir,
}: {
  port: number
  filename: string
  dir: string
}) => {
  const app = express()

  const packagePath = require.resolve('local-client/build/index.html')
  app.use(express.static(path.dirname(packagePath)))
  // app.use(
  //   createProxyMiddleware({
  //     target: 'http://localhost:3000',
  //     ws: true,
  //     logLevel: 'silent',
  //   })
  // )
  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on('error', reject)
  })
}
