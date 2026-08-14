const express = require('express');
const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');

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
    console.log(`Server is running on http://localhost:${PORT}`);
});