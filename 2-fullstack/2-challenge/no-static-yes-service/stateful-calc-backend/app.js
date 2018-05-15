var express = require("express")
var app = express()

// Body parser for forms
//  parses HTTP request body into a JS object
var bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors())

// not statically serving the application

let calc_service = require("./calc-service");
app.use("/api", calc_service);


let env_vars = require("./env-vars");
app.listen(env_vars.PORT, function() {
    console.log("litening in port " + env_vars.PORT)
})




