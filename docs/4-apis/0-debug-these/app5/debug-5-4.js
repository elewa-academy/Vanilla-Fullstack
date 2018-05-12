var express 	= require('express');
var app 		= express();
var path 		= require('path');

var port        = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use(function(req, res, next) {
	res.end();
});

app.get('/', function(req, res){
	res.send('go to \/new\/(any word you like) to see that word displayed in the browser');
});

app.get('/new/:variable', function(req, res){
	var variable = req.params.variable;
	res.send(variable);
});

app.listen(port, function(){
	console.log("Server is up on port: " + port)
});

