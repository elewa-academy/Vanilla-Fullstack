var express 	= require('express');
var app 		= express();
var port        = 3000;
var http 		= require('http');

app.listen = function() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

app.listen(port, () => {
	console.log("Server is up on port: " + port)
});