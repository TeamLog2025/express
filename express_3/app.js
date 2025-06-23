
const express = require("express");
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/weather', (req, res) => {
    const weatherData = {
    temp: 28,          
    condition: '맑음'
    };
    res.render('weather', weatherData);
});

app.get('/', (req, res) => {
    res.redirect('/weather');
});

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
});