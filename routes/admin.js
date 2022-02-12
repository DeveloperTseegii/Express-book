const express = require('express')
const app = express()
const path = require('path')
const { books } = require('../books.json')


app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.get('/books', (req, res) => {
    res.render('books', {books})
})

app.delete('/books', function(req, res) {
   res.render('books', )
});


app.delete('/booksMedia', function(req, res) {
    res.render('booksAllMedia',{books}.title, )
 });

app.get('/', (req, res) => {
    res.render('index')
})

module.exports = app;