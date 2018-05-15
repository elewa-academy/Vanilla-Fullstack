// routes.js from inside a service
const express = require("express");
let router = express.Router();

router.use("/", function(req, res, next) {
	console.log("in router");
	next();
});

router.get("/", function(req, res, next) {
	res.send("in router nothing");
});

router.get("/home", function(req, res, next) {
	res.send("in router home");
});

// module.exports = router

// --------------------------------------------------------

// app.js or index.js from the main folder
let app = express();
let PORT = 3001;

app.use("/", function(req, res, next) {
	console.log("--------------\nin app");
	next();
});

app.get("/", function(req, res, next) {
	res.send("in app nothing");
});

app.get("/home", function(req, res, next) {
	res.send("in app home");
});

// let router = require("./router");
app.use("/router", router);

app.listen(PORT, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("up on port " + PORT)
	}
});



