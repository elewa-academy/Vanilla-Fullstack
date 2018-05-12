var express 	= require('express');
var app 		= express(); 
var port        = 3000;

listen(port, () => {
	console.log("Server is up on port: " + port)
});

