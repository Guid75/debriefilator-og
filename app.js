var
fs = require('fs'),
path = require('path'),

express = require('express'),

DEFAULT_PORT = process.env.DEBRIEF_PORT || 8080,

app = express();

/* Routes */
// app.use('/apps', express.static('apps'));
// app.use('/css', express.static('css'));
// app.use('/res', express.static('res'));
//app.use('/', express.static('.'));
app.use('/', express.static('gui'));

if (module === require.main) {
  var port = process.argv[2];
  port = port ? parseInt(port, 10) : DEFAULT_PORT;

  app.listen(port, function() {
    console.log('App started at http://localhost:' + port + '/');
  });
}
