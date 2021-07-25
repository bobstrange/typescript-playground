import express, { NextFunction, Request, Response } from 'express'
import pinoHttp from 'pino-http'
import cookieParser from 'cookie-parser'
import createError, { HttpError } from 'http-errors'

const app = express()
const pino = pinoHttp()

app.use(pino)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' })
})

app.use((req, res, next) => {
  next(createError(404))
})

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.json({
    message: res.locals.message,
    error: res.locals.error,
  })
})

export { app }
