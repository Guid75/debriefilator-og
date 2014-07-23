var http = require('http');

var connect = require('connect');
var serveStatic = require('serve-static')
// gzip/deflate outgoing responses
var compression = require('compression');
var sockjs = require('sockjs');

var app = connect();

app.use(compression());

app.use('/', serveStatic('dist/'));
app.use('/api', require('./api'));

//create node.js http server and listen on port
var server = http.createServer(app);

require('./api/chat')(server);


server.listen(process.env.PORT || 3000);
console.log('server start on port ', process.env.PORT || 3000);
