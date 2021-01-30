import express from 'express'
import 'express-async-errors'
import createHttpError from 'http-errors'
import { errorHandler } from './middlewares/error-handler'

import { HomeRouter } from './routes/home/index'

export const app = express()

app.use(express.json())

app.use(HomeRouter)
app.all('*', async () => {
  throw new createHttpError.NotFound()
})

app.use(errorHandler)
