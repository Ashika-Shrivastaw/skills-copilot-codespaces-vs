// 1. Create a web server
// 2. Define a route
// 3. Read the file and return the content
// 4. Return a response
// 5. Listen on port
// 6. Open browser and navigate to localhost:3000

var http = require('http');
var fs = require('fs');

// Create web server
var server = http.createServer(function(req, res) {
  // Define a route
  if (req.url === '/') {
    // Read the file and return the content
    fs.readFile('./index.html', 'UTF-8', function(err, data) {
      // Return a response
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else if (req.url.match(/.css$/)) {
    // Read the file and return the content
    fs.readFile('./style.css', 'UTF-8', function(err, data) {
      // Return a response
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(data);
    });
  } else if (req.url.match(/.jpg$/)) {
    // Read the file and return the content
    fs.readFile('./nodejs-logo.jpg', function(err, data) {
      // Return a response
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data);
    });
  } else {
    // Read the file and return the content
    fs.readFile('./404.html', 'UTF-8', function(err, data) {
      // Return a response
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
});

// Listen on port
server.listen(3000);

// Open browser and navigate to localhost:3000
console.log('Server listening on port 3000');
