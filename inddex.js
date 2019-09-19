var http = require('http');
var express = require('express');


var app = express();


http.createServer(function (req, res) {

	var path = req.url.toLowerCase();
	switch (path) {
		case '/': 
			res.writeHead(200, {'Content0Type': 'text/plain'});
			res.end('HomePage');
			break;
		case '/about': 
			res.writeHead(200, {'Content0Type': 'text/plain'});
			res.end('About');
			break;
		default: 
			res.writeHead(200, {'Content0Type': 'text/plain'});
			res.end('404');
			break;

	}

}).listen(3200);


console.log('Server is running at port 3200');