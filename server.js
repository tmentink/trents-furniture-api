const port = process.env.PORT || 4000;
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  noCors: true
})
 
server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})