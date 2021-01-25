import express from 'express'

export const app = express()

app.use(express.json())

app.get('/', (_, res) => {
  res.json({ data: 'Hi there' })
})
