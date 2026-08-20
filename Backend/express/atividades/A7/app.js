const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const admemail = 'adm@adm.com';
const admsenha = '123';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;
  if (email == admemail && senha == admsenha) {
    res.render('result');
  } else {
    res.redirect('/');
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});