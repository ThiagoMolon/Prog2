const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

produto=[];
let soma = 0;

app.get('/', (req, res) => {
  res.render('index', { produto, soma });
});

app.post('/submit', (req, res) => {
  const nome = req.body.nome;
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const preco = req.body.preco;
  produto.push({ nome, marca, modelo, preco });
   produto.forEach(preco => {
    soma += parseFloat(preco.preco);
  });
  res.render('index', { produto, soma });
});  

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});