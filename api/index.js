var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();

app.use(bodyParser());

app.use('sessions', require('./sessions'));

app.use(function (req, res, next) {
  console.error('api called');
  res.send('api not yet implemented!');
});
