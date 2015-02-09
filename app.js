var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname + '/dist', {
  'index': 'index.html'
})).listen(19120);
