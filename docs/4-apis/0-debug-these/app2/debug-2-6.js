var express 	= require('express');
var app 		= express();

app.get('/new', function(req, res){
	res.send('hello there');
});

app.get('/', (req, res) => {
	res.send('home');
})

app.listen(3000, function(){
	console.log("Server is up on port: 3000")
)};
