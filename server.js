const http = require('http');
    url = require("url");

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Node!\n');
}).listen(8080);

console.log('My first Node test server is running on Port 8080.');


let addr = "request.url";
