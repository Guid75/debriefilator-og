
var sockjs = require('sockjs');

function Session (sessionId) {
	this.id = sessionId;
	this.connections = [];
}

Session.prototype = {
	join: function (connection) {
		this.connections.push(connection);
		this.sendMessage('chat: ' + connection.name + ' join conversation');
	},
	sendMessage: function (message) {
		this.connections.forEach(function (c) {
			c.write(message);
		});
	},
	containConnection: function (connection) {
		return this.connections.some(function (c) {
			return connection === c;
		});
	},
	removeConnection: function (connection) {
		this.connections = this.connections.filter(function (currentConnection) {
			return currentConnection = connection;
		});
	}
};

var rooms = {
	nosession: [],
	sessions: {},
	join: function (connection, message) {
		var sessionId = message.sessionId;
		
		this.removeFromOtherSessions(connection);
		if (!(sessionId in this.sessions)) {
			this.sessions[sessionId] = new Session(sessionId);
		}
		connection.name = message.userName;
		this.sessions[sessionId].join(connection);
	},
	removeFromOtherSessions: function (connection) {
		var sessions = this.sessions;
		Object.keys(sessions).forEach(function (sessionId) {
			sessions[sessionId].removeConnection(connection);
		});
	},
	findSessionOfConnection: function (connection) {
		var sessions = this.sessions;
		var session;

		var found = Object.keys(sessions).some(function (sessionId) {
			session = sessions[sessionId];
			return session.containConnection(connection);
		});
		return found ? session : null;
	},
	chat: function (connection, message) {
		var session = this.findSessionOfConnection(connection);
		if (!session) {
			console.log('session not found for this connection');
			connection.write('Error: Message can not be found. Your session is not foud');
			return;
		}
		session.sendMessage(connection.name + ': ' + message.message);

	}
};

var chat = sockjs.createServer();
chat.on('connection', function(conn) {
	rooms.nosession.push(conn);
	conn.on('data', function(data) {
		var message = JSON.parse(data);

		console.log('data', message);
		rooms[message.action](conn, message);
	});
	conn.on('close', function() {
		console.log('close');
	});
});


module.exports = function (server) {
	chat.installHandlers(server, {prefix:'/chat'});
};
