#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Edelweiss\n');
}).listen(8081, 'localhost');
console.log('Server running at http://localhost:8081/');
