const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const time = ['Brasil', 'Argentina', 'Alemanha', 'França', 'Espanha', 'Itália', 'Inglaterra', 'Uruguai', 'Holanda', 'Portugal'];
  res.render('index', { time });
});

app.get('/historia', (req, res) => {
  res.render('historia');
});

app.get('/curiosidades', (req, res) => {
  res.render('curiosidades');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});