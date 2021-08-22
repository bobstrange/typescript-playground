import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { itemRouter } from './items/item.router'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/items', itemRouter)
export { app }
