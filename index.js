const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to mySpookyFlix! A place for spooky movies -but not too scary!')
});

app.get('/movies', (req, res) => {
    res.json('movies');
})