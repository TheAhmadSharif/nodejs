var express = require('express');
var app = express();



app.get('/', function (a, b, c) {


	c()

})

app.get('/', function (a, b, c) {

	b.send('World!');

	console.log('AA');

})

app.listen(3400, function() {})