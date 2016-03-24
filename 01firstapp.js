
// import the 'http' module into a variable
var http = require("http");

// the function wich will handle all the incoming http requests
var handleHttp = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello, world!');
};

// create the http server
var httpServer = http.createServer(handleHttp);

// listen to the 8081 port
httpServer.listen(8081);

// log to the console the application status
console.log('Server running at http://localhost:8081');

