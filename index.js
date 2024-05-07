const express = require('express');
const { stream } = require('undici-types');
    morgan = require('morgan');
    fs = require('fs'), 
    path = require('path');

const app = express();

app.use(morgan('common'));

app.get('/', (req, res) => {
    res.send('Welcome to mySpookyFlix! A place for spooky movies -but not too scary!');
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname});
});
app.use(express.static("public"));


app.get('/movies', (req, res) => {
    res.json('movies');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oops! Something broke!')
});

app.listen(8080, () => {
    console.log('your app is listening on port 8080.');
});