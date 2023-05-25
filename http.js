var http = require('http');
var server = http.createServer(function(request, response) {

  if (request.url == '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end();
  } else if (request.url == '/samplefront') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end();
 
  } else if (request.url == '/gallery') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end();
  } else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write('<h1>Page not found</h1>');
    response.end();
  }

});

server.listen(3000);
console.log('Server running on port 3000');