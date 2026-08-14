const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const fotos = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
    res.render('index', { fotos });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});