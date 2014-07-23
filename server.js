var connect = require('connect');


connect().use('/', connect.static('dist/'));
connect().use('/api', require('./api'));
