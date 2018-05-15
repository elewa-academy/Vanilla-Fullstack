const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const morgan = require('morgan');

// Body parser for forms
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(morgan('tiny'));

const static_service = require('./static_service');
app.use("/", static_service);

// modify this file to also use the restful service

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("listening in port 3001");
	};
})
