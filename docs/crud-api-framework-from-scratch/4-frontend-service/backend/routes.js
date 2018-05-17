// require things
const express = require("express");
let controller = require("./controller");
let model = require("./model");

// configure the things
controller.model = model;
let router = express.Router();

// write the routes (or handlers if you will)
// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all notes

/* ------------------- INDEX -------------------*/
// GET  "/reset"                     => resets db

/* ------------------- CREATE -------------------*/
// GET  "/add"                => Create new note
// POST "/add"                => Create new note
//                                 

/* ------------------- READ -------------------*/
// GET  "/:id"             => View Beaver Info with id ...

/* ------------------- UPDATE -------------------*/
// GET  "/update"     => update Beaver with id...
// POST "/:id/update"     => update Beaver with id...
//                                 

/* ------------------- DELETE -------------------*/
// GET  "/delete"     => delete Beaver with id...
// POST "/:id/delete"     => delete Beaver with id...
//                                 

/* reinitialize  - most APIs don't expose this operation */
// POST "/reset"


router.get("/", (req, res) => {
	res.send("welcome to my restful service");
});

router.get("/all", (req, res) => {
	let all = controller.read_all();
	res.send(all);
});

router.get("/:id", (req, res) => {
	// clean user input
	let id = Number(req.params.id);

	// pass it through your core application
	let item = controller.read_one(id);

	// render result to user
	res.send(item);
});

router.get("/add", (req, res) => {
	res.send("to add a thing, send a post request to this URL with a \'new_entry\' property in the body");
});

router.post("/add", (req, res) => {
	let new_entry = req.body.new_entry;
	let message = controller.create(new_entry);
	res.send(message); 
});

router.get("/update", (req, res) => {
	res.send("to update a thing, send a post request to this URL with a \'new_entry\' & \'id\' property in the body");
});

router.post("/:id/update", (req, res) => {
	let new_entry = req.body.new_entry;
	let id = Number(req.params.id);
	let message = controller.update(id, new_entry);
	res.send(message); 
});

router.get("/delete", (req, res) => {
	res.send("to delete a thing, send a post request to this URL with an \'id\' property in the body");
});

router.post("/:id/update", (req, res) => {
	let id = Number(req.body.id);
	let message = controller.remove(id);
	res.send(message); 
});

// export the router
module.exports = router;


