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


app.post('/submit', (req, res) => {
  const nome = req.body.name;
  const materia = req.body.Materia;
  const n1 = parseFloat(req.body.Nota1);
  const n2 = parseFloat(req.body.Nota2);
  const n3 = parseFloat(req.body.Nota3);
  let resultado;
  let media = (n1+n2+n3)/3;
  if (media >= 8) {
    resultado = 'Aprovado na matéria ' + materia + ' com média ' + media.toFixed(2);
    res.render('result', { nome, resultado });
  } else {
    resultado = 'Reprovado na matéria ' + materia + ' com média ' + media.toFixed(2);
    res.render('result', { nome, resultado });  
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});