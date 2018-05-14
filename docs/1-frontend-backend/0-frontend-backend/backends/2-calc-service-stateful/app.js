var express = require("express")
var app = express()

// Body parser for forms
var bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors())

let calc_service = require("./calc-service");


app.post("/:operation", function(req, res) {
    // clean user input
    let operation = req.params.operation;
    let a = Number(req.body.a)
    let b = Number(req.body.b)
    // execute user story
    let result = calc_service.operate(operation, a, b);
    // display to user, and manage types
    res.send(String(result))
})


app.listen(3001, function() {
    console.log("litening in port 3001")
})




