var express = require("express")
var app = express()

// using body-parser
let parse_body = require("./parse-body");
app.use(parse_body);

const cors = require('cors');
app.use(cors())

let calc_service = require("./calc-service");
app.use("/calculator", calc_service)

let notes_service = require("./notes-service");
app.use("/notes", notes_service)

// to fix & understand this, look at ./.gitignore file (what is a .gitignore?)
//   your task is to reverse-engineer the ignored ./env-vars.js dependency
let env_vars = require("./env-vars");
app.listen(env_vars.PORT, function() { // process.env.PORT || 3000 - preview of coming attractions
    console.log("litening in port ", env_vars.PORT)
})




// it's (very roughly) kind of like this:

// function server(http_request) {
// 	let response = {};
// 	let http_request = parse_body(http_request);

// 	if (http_request.route = "/calculator/*") {
// 		response = calc_service(http_request);
// 	}
// 	if (http_request.route = "/notes/*") {
// 		response = notes_service(http_request);
// 	}
// 	return response
// }