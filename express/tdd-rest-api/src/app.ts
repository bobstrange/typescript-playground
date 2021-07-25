import express from 'express'
import pinoHttp from 'pino-http'

const app = express()
const pino = pinoHttp()

app.use(pino)

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' })
})

export { app }
