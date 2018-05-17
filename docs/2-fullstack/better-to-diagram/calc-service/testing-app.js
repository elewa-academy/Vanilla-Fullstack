var express = require("express");
var app = express();
var path = require('path');
var bodyParser= require('body-parser')


// Body parser for forms
//  parses HTTP request body into a JS object
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
	console.log("----- request received ------")
	next()
})

// can test with httpie
let calc_service = require("./routes");
app.use("/api", calc_service);


app.listen(3001, function() {
    console.log("listening in port 3001")
})
