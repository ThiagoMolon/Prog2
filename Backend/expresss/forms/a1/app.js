const express = require('express');
const config = require('../../config');

const app = express();

config.setup(app);

// Sample route
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  const nome = req.body.name;
  const email = req.body.email;
  const senha = req.body.password;
  const data = req.body.age;
  const genero = req.body.gender;

  app.render('loged', { nome, email, senha, data, genero }, (err, html) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao renderizar a página.');
    } else {
      res.send(html);
    }
  });
});

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
