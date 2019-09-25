var express = require('express');
var app = express();


app.get('/',
	function(req,res, next){
		if(Math.random() < 0.23) {
			return next();	
		} 
		res.send('red');
},
	function(req,res, next){
		if(Math.random() < 0.1) {
			return next();
		}
		res.send('green');
},
	function(req,res){
		res.send('blue');
	},
)


app.listen('3400');
