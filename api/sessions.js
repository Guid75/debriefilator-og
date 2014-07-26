var fs = require('fs');
var express = require('express');
var app = module.exports = express();

app.use('/sessions', function (req, res) {
	fs.readFile('data/sessions.json', function (err, data) {
		if (err) return res.json(500, {error: 'no session file!'});

    res.json(JSON.parse(data).sessions);
  });
});

app.use('/session', require('./session'));
