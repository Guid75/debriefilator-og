var http = require('http');

var connect = require('connect');
var serveStatic = require('serve-static');
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

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

MongoClient.connect('mongodb://guid:coincoin3@kahana.mongohq.com:10048/debriefilator', function(err, db) {
    if(err) throw err;

    // var collection = db.collection('test_insert');
    // collection.insert({a:2}, function(err, docs) {

	// 	collection.count(function(err, count) {
	// 		console.log(format("count = %s", count));
	// 	});

	// 	// Locate all the entries using find
	// 	collection.find().toArray(function(err, results) {
	// 		console.dir(results);
	// 		// Let's close the db
	// 		db.close();
	// 	});
    // });
});

server.listen(process.env.PORT || 3000);
console.log('server start on port ', process.env.PORT || 3000);
