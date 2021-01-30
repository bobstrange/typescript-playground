import { app } from './app'
import { PORT } from './config/environment'

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT)
})
