import { port } from './utils/env'
import { app } from './app'
;(async () => {
  await app.start(port)

  console.log('⚡️ Bolt app is running!')
})()
