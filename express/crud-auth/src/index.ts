import { app } from './app'
import { HOST, PORT } from './config/env'

app.listen(`${HOST}:${PORT}`, () => {
  console.log(`Server is running on ${HOST}:${PORT}`)
})
