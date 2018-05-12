var express 	= require('./express');
var app 		= express(); 
var port        = 3000;

app.listen(port, () => {
	console.log("Server is up on port: 3000")
});

