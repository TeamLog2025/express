
const express = require("express");
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/books', (req, res) => {
    const books = [
        { title: "자바스크립트 완벽 가이드", author: "데이비드 플래너건", year: 2020 },
        { title: "클린 코드", author: "로버트 마틴", year: 2008 },
        { title: "HTTP 완벽 가이드", author: "데이빗 고울리", year: 2014 }
    ];
    res.render('books', { books });
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
});