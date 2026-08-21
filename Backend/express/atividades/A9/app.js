const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let Filme = [];



app.get('/', (req, res) => {
  res.render('index');
});

let filmes =[];
app.post('/submit', (req, res) => {
  const nome = req.body.nome;
  const ano = req.body.lancamento;
  const genero = req.body.categoria;
  
  Filme.push({ nome, ano, genero });
  filmes = Filme
  res.render('result', { filmes});
});

app.post('/submit2', (req, res) => {
  const categoria = req.body.categoria;
  filmes = [];

    for (let i = 0; i < Filme.length; i++) {
      if (Filme[i].genero === categoria) {
        filmes.push( { nome: Filme[i].nome, ano: Filme[i].ano, genero: Filme[i].genero } );
      } else if (Filme[i].genero === categoria ) {
        filmes.push( { nome: Filme[i].nome, ano: Filme[i].ano, genero: Filme[i].genero } );
      } else if (Filme[i].genero === categoria ) {
        filmes.push( { nome: Filme[i].nome, ano: Filme[i].ano, genero: Filme[i].genero } );
      }
    }
    res.render('result', {filmes});
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
