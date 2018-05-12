var express = require("express")
var app = express()

// Body parser for forms
var bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let calc_logic = require("./logic");
let lastResult_model = require("./model")

let controller = require("./controller");
controller.logic = calc_logic;
controller.model = lastResult_model;

app.get("/", function(req, res){
    res.send("/add/a/b, /subtract/a/b, /multiply/a/b, /divide/a/b")
})

app.post("/caramel/:operation", function(req, res) {
    // clean user input
    let operation = req.params.operation;
    let a = Number(req.body.a)
    let b = Number(req.body.b)
    // execute user story
    let result = controller.operate(operation, a, b);
    // display to user, and manage types
    res.send(String(result))
})

app.post("/operate/:operation/", function(req, res) {
    // clean user input
    let operation = req.params.operation;
    let a = Number(req.body.a)
    let b = Number(req.body.b)
    // execute user story
    let lastResult = lastResult_model.get_lastResult();
    let result = calc_logic.operate(operation, a, b, lastResult);
    lastResult_model.set_lastResult(result);
    // display to user
    res.send(String(result))
})

app.get("/add/:a/:b", function(req, res) {
    // clean user input
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    // call logic & model
    let result = calc_logic.add(a, b);
    // useless model call
    lastResult_model.set_lastResult(result);
    // display result to user
    res.send(String(result))
})

app.get("/subtract/:a/:b", function(req, res) {
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    let result = calc_logic.subtract(a, b);
    lastResult_model.set_lastResult(result);
    res.send(String(result))
})

app.get("/multiply/:a/:b", function(req, res) {
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    let result = calc_logic.multiply(a, b);
    lastResult_model.set_lastResult(result);
    res.send(String(result))
})

app.get("/divide/:a/:b", function(req, res) {
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    let result = calc_logic.divide(a, b);
    lastResult_model.set_lastResult(result);
    res.send(String(result))
})

app.listen(3001, function() {
    console.log("litening in port 3001")
})




