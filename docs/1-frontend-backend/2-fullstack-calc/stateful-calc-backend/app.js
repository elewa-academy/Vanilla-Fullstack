var express = require("express")
var app = express()

// Body parser for forms
//  parses HTTP request body into a JS object
var bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors())

let calc_service = require("./calc-service");

// handler and view
app.post("/:operation", function(req, res) {
    // clean user input - handler
    //   our user is the frontend app
    //   they send their input as HTTP
    //   we parse it and use their arguments
    let operation = req.params.operation;
    let a = Number(req.body.a)
    let b = Number(req.body.b)

    // execute user story
    //  the value of your API
    //  Model, Logic, Controller
    let result = calc_service.operate(operation, a, b);

    // display to user - the API's "view"
    //   our user is the frontend app
    //   to communicate with this user we send HTTP
    //   our user understands HTTP responses
    res.send(String(result))
})

app.post("/:operation/async", function(req, res) {
    // clean user input
    let operation = req.params.operation;
    let a = Number(req.body.a)
    let b = Number(req.body.b)
    // execute user story
    calc_service.operate_async(operation, a, b, (err, result) => {
    	if (err) {
    		res.send(err)
    	} else {
    		res.send(String(result))
    	}
    });
})

let env_vars = require("./env-vars");
app.listen(env_vars.PORT, function() {
    console.log("litening in port " + env_vars.PORT)
})




