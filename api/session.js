var fs = require('fs');
var express = require('express');
var app = module.exports = express();
var uuid = require('node-uuid');

var sessions = [];

function Session(config) {
	config = config || {};

	this.id = uuid.v1();
	if (config.name) {
		this.name = config.name;
	}
	this.layout = config.layout;
	this.notes = {};
	this.round = 0;
}

function isNameUniq(name) {
	return !sessions.some(function(session) {
		return session.name.toUpperCase() === name.toUpperCase();
	});
}

function sessionById(id) {
	var res;
	sessions.some(function(session) {
		if (session.id === id) {
			res = session;
			return true;
		}
		return false;
	});
	return res;
}

function noteById(session, noteId) {
	for (var column in session.notes) {
		var res;
		var columnNotes = session.notes[column];
		if (columnNotes.some(function(note) {
			if (note.id === noteId) {
				res = note;
				return true;
			}
			return false;
		})) {
			return res;
		}
	}
	return null;
}

function removeNote(session, noteId) {
	for (var column in session.notes) {
		var columnNotes = session.notes[column];
		for (var i = 0; i < columnNotes.length; i++) {
			if (columnNotes[i].id === noteId) {
				columnNotes.splice(i, 1);
				return true;
			}
		}
	}
	return false;
}

app.post('/join/:sessionid', function (req, res) {
	console.log(req.param('sessionid'));
	res.send(200, {});
});

app.post('/new', function(req, res) {
	var session = new Session(req.body);

	if (session.name && !isNameUniq(session.name)) {
		res.send(403, { error: 'Name collision' });
		return;
	}

	sessions.push(session);
	res.send(200, {
		sessionId: session.id
	});
});

app.all('/:sessionid', function(req, res) {
	var session = sessionById(req.param('sessionid'));
	if (!session) {
		res.send(404, { error: 'session not found' });
		return;
	}

	res.send(200, {
		session: {
			id: session.id,
			name: session.name,
			layout: session.layout,
			notes: session.notes,
			round: session.round
		}
	});
});

app.all('/:sessionid/notes', function(req, res) {
	var session = sessionById(req.param('sessionid'));
	if (!session) {
		res.send(404, { error: 'session not found' });
		return;
	}

	res.send(200, {
		notes: session.notes
	});
});

app.all('/:sessionid/note/new', function(req, res) {
	var session = sessionById(req.param('sessionid'));
	if (!session) {
		res.send(404, { error: 'session not found' });
		return;
	}

	var note = {
		id: uuid.v1(),
		text: req.body.text,
		score: req.body.score
	};
	if (!session.notes[req.body.column]) {
		session.notes[req.body.column] = [];
	}
	session.notes[req.body.column].push(note);

	res.send(200, {
		noteId: note.id
	});
});

app.all('/:sessionid/note/remove/:noteid', function(req, res) {
	var session = sessionById(req.param('sessionid'));
	if (!session) {
		res.send(404, { error: 'session not found' });
		return;
	}

	var note = noteById(session, req.param('noteid'));
	if (!note) {
		res.send(404, { error: 'note not found' });
		return;
	}

	if (removeNote(session, req.param('noteid'))) {
		res.send(200, {});
	}
	res.send(500, { error: 'internal error' });
});

// api/session/654564/postits => donne tous les postits sur la session
// api/session/654564/postit/new => cree un nouveau postit
// api/session/654564/postit/list => liste tous les postits
// api/session/654564/postit/remove/32654 => supprime un postit
// api/session/654564/nextround
