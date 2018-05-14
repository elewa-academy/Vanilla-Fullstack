let config = require("./index.js");

for (animal in config.ANIMALS) {
	console.log("making service: ", animal, config.DBs[config.ANIMALS[animal]]) 
	let route = "/" + animal
	console.log("app.use: ", route);
}