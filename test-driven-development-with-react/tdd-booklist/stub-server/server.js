/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const routerSource = path.join(__dirname, 'db.json')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(routerSource)
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
  if (req.method === 'DELETE' && req.query['_cleanup']) {
    const db = router.db
    db.set('books', []).write()
    res.sendStatus(204)
  } else {
    next()
  }
})

server.use(middlewares)
server.use(router)
server.listen(8080, () => {
  console.log('JSON server is running on port 8080')
})
