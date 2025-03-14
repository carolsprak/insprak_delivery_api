const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./database/db.json')
const middlewares = jsonServer.defaults()
const bodyParser = require('body-parser')
const cors = require('cors'); // Importa o CORS para habilitar

const PORT = process.env.PORT || 4502

server.use(cors());
server.use(middlewares)
server.use(bodyParser.json())

server.post('/login', (req, res) => {
  const users = router.db.get('users').value()
  const { username, password } = req.body

  const user = users.find(u => u.username === username && u.password === password)

  if (user) {
    res.json({ success: true, userId: user.id })
  } else {
    res.status(401).json({ success: false, message: 'Usuário ou senha incorretos.' })
  } 
});

// Rota para cadastro de usuário (com validação de nome de usuário)
server.post('/users', (req, res) => {
  const users = router.db.get('users').value();
  const { username } = req.body;

  // Verificar se o nome de usuário já está em uso
  const userExists = users.find(u => u.username === username);

  if (userExists) {
    return res.status(401).json({ success: false, message: 'O nome de usuário já está em uso.' });
  }

  // Se o nome de usuário não existir, cria o novo usuário
  const newUser = {
    id: router.db.get('users').value().length + 1, // Atribui um novo ID
    ...req.body
  };

  router.db.get('users').push(newUser).write();

  res.status(201).json({ success: true, message: 'Usuário cadastrado com sucesso!', userId: newUser.id });
});


server.use(router)

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
