//      learning tasks
// access /all then /reset - explain what happens in the console
// shuffle around the routes, what happens?
const express = require("express");
const app = express();

// Body parser for the HTTP body
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const cors = require('cors');
// cross origin resource sharing
// to accept requests that weren't issued by an app served on this port
//  a must for APIs
app.use(cors());

const notes_model = require('./json-async-model');
// const notes_model = require('./json-sync-model');

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


app.get("/", function(req, res) {
    console.log("-- GET /all --");
    res.json("hi, you're at my notes api")
})

app.get("/all", function(req, res){
    console.log("-- GET /all --");
    notes_model.read_all(function(obj) {
        res.json(obj);
    })
})

app.post("/reset", function(req, res){
    console.log("-- GET /reset --");
    notes_model.reset(function(err) {
        if (err) {
            res.json(err);
        }  else {
            res.json({"reset": "successful" });
        };
    });
})

app.get("/add", function(req, res){
    console.log("-- GET /add --");
    res.send('put a new "note" property in the body and submit')
})

app.post("/add", function(req, res){
    console.log("-- POST /add --");
    let new_note = req.body.note;
    let id = notes_model.create(new_note, function(err, ID, note) {
        if (err) {
            res.json(err)
        } else {
            let message = {"add":"successful"};
            message[ID] = note;
            res.json(message);
        }
    });
})

app.get("/:id", function(req, res){
    console.log("-- GET /:id --");
    let note_id = req.params.id
    notes_model.read_one(note_id, function(obj) {
        res.json(obj);
    });
})

app.get("/:id/update", function(req, res){
    console.log("-- GET /:id/update --");
    let note_id = req.params.id
    let response = {}
    notes_model.read_one(note_id, function(note) {
        response.note = note
        response.next_step = 'post with a \'note\' property in the body';
        res.json(response);
    });
})

app.post("/:id/update", function(req, res){
    console.log("-- POST /:id/update --");
    let note_id = req.params.id
    notes_model.update(note_id, req.body.note, function(err, ID, note) {
        if (err) {
            res.json(err)
        } else {
            let message = {"update": "successful"};
            message[ID] = note;
            res.json(message);
        };
    })
})

app.get("/:id/delete", function(req, res){
    console.log("-- GET /:id/delete --");
    let note = notes_model.read_one(req.params.id, function(note) {
        res.json({id: note, message: 'confirm deleting this note'});
    });
})

app.post("/:id/delete", function(req, res){
    console.log("-- POST /:id/delete --");
    let note_id = req.params.id
    notes_model.remove(note_id, function(err, ID, note) {
        if (err) {
            res.json(err)
        } else {
            let message = {"delete": "successful"};
            message[ID] = note;
            res.json(message);
        };
    })
})


app.listen(3000, function() {
    console.log("listening on 3001");
})

