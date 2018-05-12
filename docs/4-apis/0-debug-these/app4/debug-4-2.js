var express 	= require('express');
var app 		= express();
var path 		= require('path');
var port        = 3000;

app.use(express.static(path.join(__dirname, '../public'), {index: false}));

app.get('/', function(req, res){
	res.send('go to \/new\/(any word you like) to see that word displayed in the browser');
});

app.get('/new/*', function(req, res){
	res.send('/new/variable');
});

app.get('/new/:variable', function(req, res){
	var variable = req.params.variable;
	res.send(variable);
});

app.listen(port, function(){
	console.log("Server is up on port: " + port)
});

