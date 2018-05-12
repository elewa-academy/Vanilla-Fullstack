const express = require("express");
let router = express.Router();

// Body parser for forms
var bodyParser= require('body-parser')

router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

module.exports = router;

