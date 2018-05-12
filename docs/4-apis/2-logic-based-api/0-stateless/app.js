var express = require("express")
var app = express()

// Body parser for forms
var bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let calc_logic = require("./logic");



app.get("/", function(req, res){
    res.send("/add/a/b, /subtract/a/b, /multiply/a/b, /divide/a/b")
})

app.get("/add/:a/:b", function(req, res) {
    // clean user input
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    // pass it through the logic
    let result = calc_logic.add(a, b);
    // display result to the user
    res.send(String(result))
})

app.get("/subtract/:a/:b", function(req, res) {
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    let result = calc_logic.subtract(a, b);
    res.send(String(result))
})

app.get("/multiply/:a/:b", function(req, res) {
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    let result = calc_logic.multiply(a, b);
    res.send(String(result))
})

app.get("/divide/:a/:b", function(req, res) {
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    let result = calc_logic.divide(a, b);
    res.send(String(result))
})

app.listen(3001, function() {
    console.log("litening in port 3001")
})




