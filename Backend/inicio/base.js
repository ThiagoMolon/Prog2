const http = require('http');
const local = 'http://localhost:3000';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Bem-vindo ao meu servidor!');
    } else if (req.url === '/sobre') {
        res.write('Esta é a página sobre nós.');
    } else if (req.url === '/contato') {
        res.write('aaa');
    } else {
        res.write('Página não encontrada.');
    }
    res.end();
})
console.log(`Servidor rodando em ${local}`);
server.listen(3000);