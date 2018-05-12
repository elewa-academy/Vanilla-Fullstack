var express 	= require('express');
var app 		= express(); 
var port        = 3000;

app.listen('3000', () => {
	console.log("Server is up on port: " + port)
});
