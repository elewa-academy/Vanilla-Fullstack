// require components
let controller = require("./controller");
let logic = require("./logic");
// model if there was one in this service

// build service
controller.logic = logic;

// export services
module.exports = controller