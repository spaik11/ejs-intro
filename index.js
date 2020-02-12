const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const users = require('./models/Users.json');

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
// you can set the 
app.set('views', path.join(__dirname, 'views'));

app.get('/first', (req, res) => {
    res.render('main/home', { name: 'Bill' });
});

app.get('/location/:color/:car', (req, res) => {
    const firstName = 'Sung';
    const lastName = 'Paik';
    let places = [
        { city: 'Stanford', state: 'Connecticut' },
        { city: 'New York', state: 'NY' },
        { city: 'Las Vegas', state: 'Nevada' },
    ]
    const { color, car } = req.params;
    res.render('main/location', { color, car, places, firstName, lastName });
});

app.get('/users', (req, res) => {
    const { name, city } = users
    res.render('main/users', { name, city, users });
})

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});