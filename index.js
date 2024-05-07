const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to mySpookyFlix! A place for spooky movies -but not too scary!')
});

app.get('/movies', (req, res) => {
    res.json('movies');
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oops! Something broke!')
})