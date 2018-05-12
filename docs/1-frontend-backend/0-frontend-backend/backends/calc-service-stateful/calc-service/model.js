const fs = require('fs');
const path = require('path');

// .txt is better than .json here since our data simple and unstructured
let model = {
    set_lastResult: function(new_last_result) {
    	fs.writeFileSync(path.join(__dirname, './db.txt'), new_last_result);
    },
    get_lastResult: function() {
    	var raw_last_result = fs.readFileSync(path.join(__dirname, './db.txt'), 'utf8');
        return Number(raw_last_result);
    },
};


module.exports = model;