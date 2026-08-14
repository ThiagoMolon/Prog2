const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const selecoes = [
    { flag: 'Brasil.png', nome: 'Brasil', titulos: 5 },
    { flag: 'alemanha.png', nome: 'Alemanha', titulos: 4 },
    { flag: 'france.png', nome: 'França', titulos: 2 },
    { flag: 'espanha.png', nome: 'Espanha', titulos: 1 },
    { flag: 'inglatera.png', nome: 'Inglaterra', titulos: 1 },
    { flag: 'italy.png', nome: 'Itália', titulos: 1 },
    { flag: 'uruguay.jpeg', nome: 'Uruguai', titulos: 2 }
  ];

  res.render('index', { selecoes });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});