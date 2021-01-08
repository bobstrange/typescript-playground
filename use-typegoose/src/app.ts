import express from 'express'
import { UserModel } from './db/user'
const app = express()

app.get('/', (req, res) => {
  res.json({
    data: 'Hi there',
  })
})

app.get('/users', async (req, res) => {
  const users = await UserModel.find({ id: 'test' }).exec()
  res.json({
    data: users,
  })
})

export { app }
