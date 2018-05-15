const express = require("express");
let router = express.Router();
let model = require("./model");
let logic = require("./logic");
let controller = require("./controller");
let routes = require("./routes")

controller.model = model;
controller.logic = logic;


// handler and view
router.post("/:operation", function(req, res) {
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
    let result = controller.operate(operation, a, b);

    // display to user - the API's "view"
    //   our user is the frontend app
    //   to communicate with this user we send HTTP
    //   our user understands HTTP responses
    res.send(String(result))
})

module.exports = router;

