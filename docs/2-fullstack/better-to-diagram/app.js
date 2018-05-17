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

// what's the difference between these?
// app.get("/", express.static(path.join(__dirname + '/public')));
app.use("/", express.static(path.join(__dirname + '/public')));

let calc_service = require("./calc-service");
app.use("/api", calc_service);

app.listen(3001, function() {
    console.log("listening in port 3001")
})




