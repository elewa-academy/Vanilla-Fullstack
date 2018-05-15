// require things
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser= require('body-parser');
const config = require("./config");
const rest_service = require("./rest-service");

// middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

function basic_logger(req, res, next) {
	console.log(req.method, ": ", req.url);
	next();
};
app.use(basic_logger)


// set routes
app.get("/", (req, res) => {
	res.send("welcome to my zoo. we have: " + config.ANIMALS);
})

// initialize & use services

for (animal in config.ANIMALS) {

	let path_to_db = config.DBs[config.ANIMALS[animal]];
	let next_service = rest_service(animal, path_to_db); 

	let route = "/" + animal;
	app.use(route, next_service);

}


// launch app
app.listen(config.PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("zoo up on port " + config.PORT);
	}
})