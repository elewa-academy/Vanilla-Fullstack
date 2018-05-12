var express 	= require('express');
var app 		= express(); 
var part        = 3000;

app.listen(port, () => {
	console.log("Server is up on port: " + part)
});
