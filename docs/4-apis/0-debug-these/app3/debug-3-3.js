var express 	= require('express');
var app 		= express();
var path 		= require('path');
var port        = 3000;

app.use(express.static(path.join(_dirname, './public')));

app.get('/', function(req, res){
	res.render('./lol.html');
});

app.get('/new', function(req, res){
	res.send('hello there');
});

app.listen(port, function(){
	console.log("Server is up on port: " + port)
});

