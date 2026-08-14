const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  const nome = req.body.name;
  const email = req.body.email;
  const senha = req.body.password;
  const data = req.body.age;
  const genero = req.body.gender;

  res.render('loged', { nome, email, senha, data, genero });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
