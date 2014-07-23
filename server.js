var http = require('http');

var connect = require('connect');
var serveStatic = require('serve-static')
// gzip/deflate outgoing responses
var compression = require('compression');

var app = connect();

app.use(compression());

app.use('/', serveStatic('dist/'));
app.use('/api', require('./api'));


//create node.js http server and listen on port
http.createServer(app).listen(3000);
