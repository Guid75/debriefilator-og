var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./sessions'));

app.use(function (req, res, next) {
  console.error('api called');
  res.send('api not yet implemented!');
});
