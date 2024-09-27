const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./database/db.json')
const middlewares = jsonServer.defaults() 

const PORT = process.env.PORT || 4501

server.use(middlewares)  

server.post('/login', (req, res) => {
  const users = router.db.get('users').value()
  const { username, password } =  req.body

  const user = users.find(u => u.username === username && u.password === password)

  if (user) {
    res.json({ success: true, userId: user.id })
  } else {
    res.status(401).json({ success: false, message: 'Usuário ou senha incorretos.' })
  }
})

server.use(router)


server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
