// require all necessary components
let math_service = require("../service"); // auto-import from index.js

let view = require("./view");
let handler = require("./handler");


// build them (inject dependencies)
math_service.view = view;
handler.controller = math_service;


// run/start app
handler.handle();