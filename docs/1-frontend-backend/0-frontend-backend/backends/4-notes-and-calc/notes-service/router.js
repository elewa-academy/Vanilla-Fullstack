//      learning tasks
// access /all then /reset - explain what hrouterens in the console
// change shuffle around the routes, what hrouterens?

var express = require("express")
var router = express.Router()

var notes_service = require('./json-sync-model');

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


router.get("/", function(req, res) {
    console.log("-- GET /notes/all --");
    res.send("hi, you're at my notes api")
})

router.get("/all", function(req, res){
    console.log("-- GET /notes/all --");
    res.send(notes_service.read_all());
})

router.get("/reset", function(req, res){
    console.log("-- GET /notes/reset --");
    notes_service.reset();
    res.redirect("/notes/all");
})

router.get("/add", function(req, res){
    console.log("-- GET /notes/add --");
    res.send('put a new "note" property in the body and submit')
})

router.post("/add", function(req, res){
    console.log("-- POST /notes/add --");
    var new_note = req.body.note;
    console.log(req.body)
    var id = notes_service.create(new_note);
    res.redirect("/notes/" + id)
})

router.get("/:id", function(req, res){
    console.log("-- GET /notes/:id --");
    var note_id = req.params.id
    res.send(notes_service.read_one(note_id));
})

router.get("/:id/update", function(req, res){
    console.log("-- GET /notes/:id/update --");
    var note_id = req.params.id
    var response = {}
    response[note_id] = notes_service.read_one(note_id);
    response.next_step = 'post with a \'note\' property in the body';
    res.send(response);
})

// params is a feature of express
router.post("/:id/update", function(req, res){
    console.log("-- POST /notes/:id/update --");
    var note_id = req.params.id
    notes_service.update(note_id, req.body.note)
    res.redirect("/notes/" + note_id)
})

// will work
// router.post("/:y/update", function(req, res){ 
//     console.log("-- POST /notes/:id/update --");
//     var note_id = req.params.y
//     notes_service.update(note_id, req.body.note)
//     res.redirect("/notes/" + note_id)
// })

// won't work
// router.post("/id/update", function(req, res){
//     console.log("-- POST /notes/:id/update --");
//     var note_id = req.params.id
//     notes_service.update(note_id, req.body.note)
//     res.redirect("/notes/" + note_id)
// })

router.get("/:id/delete", function(req, res){
    console.log("-- GET /notes/:id/delete --");
    var note = notes_service.read_one(req.params.id);
    res.send({id: note, message: 'confirm deleting this note'});
})

router.post("/:id/delete", function(req, res){
    console.log("-- POST /notes/:id/delete --");
    notes_service.remove(req.params.id);
    res.redirect("/notes/all")
})



module.exports = router;


