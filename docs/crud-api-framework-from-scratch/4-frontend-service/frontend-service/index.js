const express = require("express");
let router = express.Router();

router.use("/", express.static(path.join(__dirname + '/public'))); 

module.exports = router;