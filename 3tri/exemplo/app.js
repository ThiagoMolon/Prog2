const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const produtos = require('./rotas/produtos.js');
app.use('/produtos', produtos)


app.listen(3000);
console.log('http://localhost:3000/produtos');