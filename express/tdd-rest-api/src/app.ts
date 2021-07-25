import express from 'express'
import pinoHttp from 'pino-http'
import cookieParser from 'cookie-parser'

const app = express()
const pino = pinoHttp()

app.use(pino)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' })
})

export { app }
