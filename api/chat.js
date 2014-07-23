
var sockjs = require('sockjs');

var connections = [];

var chat = sockjs.createServer();
chat.on('connection', function(conn) {
	connections.push(conn);
	var number = connections.length;
	conn.write("Welcome, User " + number);
	conn.on('data', function(message) {
		for (var ii=0; ii < connections.length; ii++) {
			connections[ii].write("User " + number + " says: " + message);
		}
	});
	conn.on('close', function() {
		for (var ii=0; ii < connections.length; ii++) {
			connections[ii].write("User " + number + " has disconnected");
		}
	});
});


module.exports = function (server) {
	chat.installHandlers(server, {prefix:'/chat'});
};
