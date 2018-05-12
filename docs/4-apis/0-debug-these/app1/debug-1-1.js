var express 	= require('express');
var app 		= express();
var port        = 3000;
var path		= require('path')

app.get('./', function(req, res){
	res.send('../views/index.html');
});

app.listen(port, function(){
	console.log("Server is up on port: " + port)
});

