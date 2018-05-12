var express = require("express")
var app = express()

// using body-parser
let parse_body = require("./parse-body");
app.use(parse_body);

let calc_service = require("./calc-service");
app.use("/calculator", calc_service)

let notes_service = require("./notes-service");
app.use("/notes", notes_service)

// process.env.PORT || 3000 - preview of coming attractions
let env_vars = require("./env-vars");
app.listen(env_vars.PORT, function() {
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