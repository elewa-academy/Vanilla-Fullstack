var express 	= require('express');
var app 		= express();
var port        = 3000;

app.get('/new', function(res, req){
	res.send('hello there');
});

app.get('/', (req, res) => {
	res.send('home');
})

app.listen(port, function(){
	console.log("Server is up on port: " + port)
});

