// require everything
const express = require("express");
let bodyParser = require("body-parser");
let morgan = require('morgan');
let path = require("path");

  // * initialize app
let app = express();

//configuration middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(morgan('tiny'));

  // * statically serve our frontend
let static_service = require("./frontend_service");
app.use("/", static_service);

  // * use the backend service
let calc_service = require("./backend");
app.use("/api", calc_service);

  // * listen on a port
app.listen(3001, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("up on 3001");
	}
})

// // source code for app.listen
// app.listen = function() {
//   // start a native node server with the "app" function 
//   //	meaning your "app" is executed every time a request comes in
//   var server = http.createServer(this);
//   // and set the server to listen
//   return server.listen.apply(server, arguments);
// };

// pseudo-listen function
// app.listen = function(port_number, cb) {
// 	// magically open a server on port port_number
// 	cb(err);
// }



























