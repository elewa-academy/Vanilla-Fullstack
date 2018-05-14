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

for (animal in config.ANIMALS) {

	let path_to_db = config.DBs[config.ANIMALS[animal]];
	console.log(path_to_db)
	console.log(animal)
	console.log(config.ANIMALS[animal])
	let next_service = rest_service(animal, path_to_db); 

	let route = "/" + animal;
	console.log(route)
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