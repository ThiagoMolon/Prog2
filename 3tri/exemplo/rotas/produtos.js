const express = require('express');
const produtos = express();
const db = require('../banco/database.js');

produtos.get('/', (req, res) => {
  res.render('form-cadastro.ejs', { produtos});
});

produtos.post('/cadastrar', (req, res) => {
    const { nome, valor, quantidade } = req.body;
    db.run(
        'insert into produtos (nome, valor, quantidade) values (?,?,?)',
        [nome, valor, quantidade],
        function (err) {
            if (err) {
                console.error(err.message);
                res.status(500).send('Erro ao cadastrar produto'+ err.message);
            } else {
                res.redirect('/produtos/listar');
            }
        }
    );
});

produtos.get('/listar', (req, res) => {
    db.all('select * from produtos', [],function (err, produtos) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Erro ao buscar produtos');
        } else {
            res.render('lista-produtos.ejs', { Produtos: produtos });
        }
    });
});

module.exports = produtos;