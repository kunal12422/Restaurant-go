var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


require('./routes')(app);

module.exports = app;