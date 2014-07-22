var express = require('express');
var app = module.exports = express();

app.use(function (req, res) {
  res.json({
    sessions: [{
      name: 'sprint1'
    }, {
      name: 'sprint2'
    }, {
      name: 'sprint3'
    }, {
      name: 'sprint4'
    }, {
      name: 'sprint5'
    }]
  });
});
