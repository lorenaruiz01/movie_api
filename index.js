const express = require('express');
    morgan = require('morgan');
const app = express();

app.use(morgan('common'))

app.get('/', (req, res) => {
    res.send('Welcome to mySpookyFlix! A place for spooky movies -but not too scary!')
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname})
});
app.use(express.static("public"));


app.get('/movies', (req, res) => {
    res.json('movies');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oops! Something broke!')
})