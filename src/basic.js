var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('hello world')
});

app.all('/secret', function(req, res, next){
    console.log('Accessing the secret section...')
    res.send('Printing in your console the message')
    next()
});

app.listen(8080);