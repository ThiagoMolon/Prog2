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

Atividade = []

app.post('/submit', (req, res) => {
  const Atvtimeinit = req.body.Atvtimeinit;
  const Atvtimend = req.body.Atvtimend;
  const Atvname = req.body.Atvname;
  const Atvdesc = req.body.Atvdesc;
  const AtvdateInit = req.body.AtvdateInit;
  const AtvdateEnd = req.body.AtvdateEnd;

  Atividade.push({ Atvtimeinit, Atvtimend, Atvname, Atvdesc, AtvdateInit, AtvdateEnd });

  res.render('result', { Atividade });
})


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});