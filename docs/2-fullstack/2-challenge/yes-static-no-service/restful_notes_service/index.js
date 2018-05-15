//      learning tasks
// access /all then /reset - explain what happens in the console
// change shuffle around the routes, what happens?
const express = require("express");
const router = express.Router();

const notes_service = require('./json-async-model');
// const notes_service = require('./json-sync-model');

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all notes

/* ------------------- INDEX -------------------*/
// GET  "/reset"                     => resets db

/* ------------------- CREATE -------------------*/
// GET  "/add"                => Create new Beaver
// POST "/add"                => Create new Beaver
//                                 Redirect to "/note/:id"

/* ------------------- READ -------------------*/
// GET  "/:id"             => View Beaver Info with id ...

/* ------------------- UPDATE -------------------*/
// GET  "/:id/update"     => update Beaver with id...
// POST "/:id/update"     => update Beaver with id...
//                                 Redirect to "/note/:id"

/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => delete Beaver with id...
// POST "/:id/delete"     => delete Beaver with id...
//                                 Redirect to "/"

/* reinitialize  - most APIs don't expose this operation */
// POST "/reset"


router.get("/", function(req, res) {
    console.log("-- GET /all --");
    res.json("hi, you're at my notes api")
})

router.get("/all", function(req, res){
    console.log("-- GET /all --");
    notes_service.read_all(function(obj) {
        res.json(obj);
    })
})

router.post("/reset", function(req, res){
    console.log("-- GET /reset --");
    notes_service.reset(function(err) {
        if (err) {
            res.json(err);
        }  else {
            res.json({"reset": "successful" });
        };
    });
})

router.get("/add", function(req, res){
    console.log("-- GET /add --");
    res.json('put a new "note" property in the body and submit')
})

router.post("/add", function(req, res){
    console.log("-- POST /add --");
    let new_note = req.body.note;
    let id = notes_service.create(new_note, function(err, ID, note) {
        if (err) {
            res.json(err)
        } else {
            let message = {"add":"successful"};
            message[ID] = note;
            res.json(message);
        }
    });
})

router.get("/:id", function(req, res){
    console.log("-- GET /:id --");
    let note_id = req.params.id
    notes_service.read_one(note_id, function(obj) {
        res.json(obj);
    });
})

router.get("/:id/update", function(req, res){
    console.log("-- GET /:id/update --");
    let note_id = req.params.id
    let response = {}
    notes_service.read_one(note_id, function(note) {
        response.note = note
        response.next_step = 'post with a \'note\' property in the body';
        res.json(response);
    });
})

router.post("/:id/update", function(req, res){
    console.log("-- POST /:id/update --");
    let note_id = req.params.id
    notes_service.update(note_id, req.body.note, function(err, ID, note) {
        if (err) {
            res.json(err)
        } else {
            let message = {"update": "successful"};
            message[ID] = note;
            res.json(message);
        };
    })
})

router.get("/:id/delete", function(req, res){
    console.log("-- GET /:id/delete --");
    let note = notes_service.read_one(req.params.id, function(note) {
        res.json({id: note, message: 'confirm deleting this note'});
    });
})

router.post("/:id/delete", function(req, res){
    console.log("-- POST /:id/delete --");
    let note_id = req.params.id
    notes_service.remove(note_id, function(err, ID, note) {
        if (err) {
            res.json(err)
        } else {
            let message = {"delete": "successful"};
            message[ID] = note;
            res.json(message);
        };
    })
})


module.exports = router;

