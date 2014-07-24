var fs = require('fs');
var express = require('express');
var app = module.exports = express();

app.post('/join/:sessionid', function (req, res) {
	console.log(req.param('sessionid'));
	res.send(200, { success: true });
});

app.all('/:sessionid', function(req, res) {
	res.send(200, {
		sessionId: req.param('sessionid'),
		success: true
	});
});

app.all('/:sessionid/postits', function(req, res) {
	res.send(200, {
		sessionId: req.param('sessionid'),
		success: true
	});
});

app.all('/:sessionid/postit/remove/:postitid', function(req, res) {
	res.send(200, {
		sessionId: req.param('sessionid'),
		postitId: req.param('postitid'),
		success: true
	});
});

// api/session/654564 => donne toutes les infos sur la session : step courant, les postsit, etc

// api/session/654564/postits => donne tous les postits sur la session
// api/session/654564/postit/new => cree un nouveau postit
// api/session/654564/postit/list => liste tous les postits
// api/session/654564/postit/remove/32654 => supprime un postit
