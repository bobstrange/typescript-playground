import { exit } from 'process'
import { app } from './app'
import { connect } from './db/init'

const start = async () => {
  const connected = await connect('localhost', 38017, 'test')
  if (!connected) {
    exit(1)
  }
  app.listen(9999, () => {
    console.log('Listening on localhost: 9999')
  })
}

start()
