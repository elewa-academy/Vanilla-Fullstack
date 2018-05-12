let model = require("./model");
let logic = require("./logic");
let controller = require("./controller");

controller.model = model;
controller.logic = logic;

module.exports = controller;