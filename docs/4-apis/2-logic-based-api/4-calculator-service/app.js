var express = require("express")
var app = express()

// Body parser for forms
var bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let calc_service = require("./calc-service");


app.get("/", function(req, res){
    res.send("/add/a/b, /subtract/a/b, /multiply/a/b, /divide/a/b")
})

app.post("/operate/:operation", function(req, res) {
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




