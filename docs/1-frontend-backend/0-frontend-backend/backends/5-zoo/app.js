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


// set routes
app.get("/", (req, res) => {
	res.send("welcome to my zoo");
})

// initialize services
let rest_services = {}
for (animal in config.ANIMALS) {

	let path_to_db = config.DBs[config.ANIMALS[animal]];
	let next_service = rest_service(animal, path_to_db); 
	rest_services[animal] = next_service;

}

console.log(rest_services)
// use services
app.get("/:data_type", (req, res) => {
	rest_services[req.params.data_type]();
})

// launch app
app.listen(config.PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("zoo up on port " + config.PORT);
	}
})