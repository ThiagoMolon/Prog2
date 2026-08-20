const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

Produto = [];

app.post("/submit", (req, res) => {
  const nome = req.body.nome;
  const estoque = req.body.estoque;
  const valor = req.body.valor;
  if (estoque < 10) {
    Produto.push({ nome, estoque, valor });
  }
  res.render("result", { Produto });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
