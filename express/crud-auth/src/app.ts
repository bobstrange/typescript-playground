import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { itemRouter } from './items/item.router'
import { ErrorHandler } from './middlewares/error.middleware'
import { NotFoundHandler } from './middlewares/notfound.middleware'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/items', itemRouter)
app.use(ErrorHandler)
app.use(NotFoundHandler)

export { app }
