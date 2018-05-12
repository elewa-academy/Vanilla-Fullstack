let express = require("express");
let Router = express.Router();

let view = require("./express-view");
let notes_service = require('./json-sync-model');


// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/notes/"                     => greetings

/* ------------------- INDEX -------------------*/
// GET  "/notes/all"                     => show all notes

/* ------------------- INDEX -------------------*/
// GET  "/notes/reset"                     => resets db

/* ------------------- CREATE -------------------*/
// GET  "/notes/add"                => Create new Beaver
// POST "/notes/add"                => Create new Beaver
//                                 Redirect to "/note/:id"

/* ------------------- READ -------------------*/
// GET  "/notes/:id"             => View Beaver Info with id ...

/* ------------------- UPDATE -------------------*/
// GET  "/notes/:id/update"     => update Beaver with id...
// POST "/notes/:id/update"     => update Beaver with id...
//                                 Redirect to "/note/:id"

/* ------------------- DELETE -------------------*/
// GET  "/notes/:id/delete"     => delete Beaver with id...
// POST "/notes/:id/delete"     => delete Beaver with id...
//                                 Redirect to "/"

/* reinitialize  - most APIs don't expose this operation */
// POST "/notes/reset"


Router.get("/notes", function(req, res) {
    console.log("-- GET /notes/all --");
    view.render("hi, you're at my notes api")
})

Router.get("/notes/all", function(req, res){
    console.log("-- GET /notes/all --");
    view.render(notes_service.read_all());
})
Router.get("/notes/reset", function(req, res){
    console.log("-- GET /notes/reset --");
    notes_service.reset();
    res.redirect("/notes/all");
})

Router.get("/notes/add", function(req, res){
    console.log("-- GET /notes/add --");
    view.render('put a new "note" property in the body and submit')
})

Router.post("/notes/add", function(req, res){
    console.log("-- POST /notes/add --");
    var new_note = req.body.note;
    var id = notes_service.create(new_note);
    res.redirect("/notes/" + id)
})

Router.get("/notes/:id", function(req, res){
    console.log("-- GET /notes/:id --");
    var note_id = req.params.id
    view.render(notes_service.read_one(note_id));
})

Router.get("/notes/:id/update", function(req, res){
    console.log("-- GET /notes/:id/update --");
    var note_id = req.params.id
    var response = {}
    response[note_id] = notes_service.read_one(note_id);
    response.next_step = 'post with a \'note\' property in the body';
    view.render(response);
})

Router.post("/notes/:id/update", function(req, res){
    console.log("-- POST /notes/:id/update --");
    var note_id = req.params.id
    notes_service.update(note_id, req.body.note)
    res.redirect("/notes/" + note_id)
})

Router.get("/notes/:id/delete", function(req, res){
    console.log("-- GET /notes/:id/delete --");
    var note = notes_service.read_one(req.params.id);
    view.render({id: note, message: 'confirm deleting this note'});
})

Router.post("/notes/:id/delete", function(req, res){
    console.log("-- POST /notes/:id/delete --");
    notes_service.remove(req.params.id);
    res.redirect("/notes/all")
})

module.exports = Router;
