
const express = require("express");
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/',(req, res) => {
    res.render('profile',{
        name: '김지후',
        age: 17,
        job: '개발자'
    });
});

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
});