var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(path.join(__dirname, './public')));

module.exports = router;

// there is no view folder.  MVC is dead