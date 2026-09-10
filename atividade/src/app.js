const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');

});

app.get('/CadastrarProduto', (req, res) => {
    res.render('cadastrar');
});

app.get('/filtrar', (req, res) => {
    res.render('lista', {Produto: produto});
});

let produto = []
app.post('/CadastrarProduto', (req, res) =>{
    const { nome, marca, valor, categoria } = req.body;
    const preProduto = { nome, marca, valor, categoria };
    if(preProduto.categoria != "saia"){
        produto.push(preProduto);
    }
    res.render('cadastrar', {produto})
})

app.post('/filtrar', (req, res) =>{
    const categoria = req.body.categoria;
    let Produto = [];

    if (categoria && categoria !== 'nulo') {
      Produto = produto.filter(item => item.categoria === categoria);
    } else {
      Produto = produto;
    }

    res.render('lista', { Produto });
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
