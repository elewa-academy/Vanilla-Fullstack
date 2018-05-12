let express = require("express");
let server = express();
let PORT = require("./PORT");


server.listen(PORT, function(err) {
	if (err) {
		console.log(err);
	} else {
    	console.log("litening in port ", PORT)
    }
})

module.exports = server;

