// require all necessary components

let controller = require("../components/controller");
let logic = require("../components/logic");
let view = require("../components/view");

let handler = require("../components/handler");


// build them (inject dependencies)

controller.logic = logic;
controller.view = view;

handler.controller = controller;


// run/start app

handler.handle();