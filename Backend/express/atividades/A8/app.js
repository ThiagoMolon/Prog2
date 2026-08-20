const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { resultado });
});

let resultado = 0;

app.post('/submit', (req, res) => {
  const n1 = parseFloat(req.body.numero1);
  const n2 = parseFloat(req.body.numero2);
  const operacao = req.body.operacao;

  switch (operacao) {
    case '+':
      resultado = n1 + n2;
      break;
    case '-':
      resultado = n1 - n2;
      break;
    case '*':
      resultado = n1 * n2;
      break;
    case '/':
      resultado = n1 / n2;
      break;
    default:
      resultado = 0;
  }

  res.render('index', { resultado });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});