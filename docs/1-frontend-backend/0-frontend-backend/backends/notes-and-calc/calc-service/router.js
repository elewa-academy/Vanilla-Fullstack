const express = require("express");
let router = express.Router();

let model = require("./model");
let logic = require("./logic");
let controller = require("./controller");

controller.model = model;
controller.logic = logic;

router.post("/:operation", function(req, res) {
    // clean user input
    let operation = req.params.operation;
    let a = Number(req.body.a)
    let b = Number(req.body.b)
    // execute user story
    let result = controller.operate(operation, a, b);
    // display to user, and manage types
    res.send(String(result))
})

module.exports = router;