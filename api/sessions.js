var express = require('express');
var app = module.exports = express();



app.use(function () {
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
    }];
  });
});
