import express from 'express'
import 'express-async-errors'
import createHttpError from 'http-errors'
import { errorHandler } from './middlewares/error-handler'

const app = express()

app.use(express.json())

app.get('/', (_, res) => {
  res.json({ data: 'Hi there' })
})

app.all('*', async () => {
  throw new createHttpError.NotFound()
})

app.use(errorHandler)

export { app }
