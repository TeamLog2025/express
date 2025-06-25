import express from 'express';
const app= express();
const PORT = 3000;


app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

const books = [];

app.get('/', (req, res) => {
    res.render('index', { books });
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {
    const { title, author, year } = req.body;
    books.push({ title, author, year });
    res.redirect('/');
});

app.get('/book/:title', (req, res) => {
    const book = books.find(b => b.title === req.params.title);
    res.render('book', { book });
});

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
});