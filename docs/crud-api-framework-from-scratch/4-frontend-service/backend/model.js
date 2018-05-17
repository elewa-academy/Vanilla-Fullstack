let jsonfile = require('jsonfile');
let path = require('path');

let model = {
	reset: function() {
			let db = {};
			db.meta = {};
			db.meta.nextID = 0;
			db.meta.name = "sample-project";
			db.data = {};
			jsonfile.writeFileSync(path.join(__dirname, './db.json'), db)
		},
	create: function(new_entry) {
			let db = require('./db.json');
			let data = db.data;
			// why can't you do this?
			// let nextID = db.meta.nextID;

			data[db.meta.nextID] = new_entry;
			db.meta.nextID = db.meta.nextID + 1;
			jsonfile.writeFileSync(path.join(__dirname, './db.json'), db)
			return db.meta.nextID - 1;
		},
	read_one: function(index) {
			let db = require('./db.json');
			let data = db.data;
			return data[index];
		},
	read_all: function() {
			let db = require('./db.json');
			return db.data
			//  	returns array of all data
			// let db = require('./db.json');
			// let data = db.data;
			// let returner = [];
			// for (let property in data) {				
			// 	let entry = {};
			// 	entry[property] = data[property];
			// 	returner.push(entry);
			// };
			// return returner;
		},
	update: function(_index, new_entry) {
			let db = require('./db.json');
			let index = String(_index);
			db.data[index] = new_entry;
			jsonfile.writeFileSync(path.join(__dirname, './db.json'), db)
		},
	remove: function(index) {
			let db = require('./db.json');
			let data = db.data;
			delete data[index];
			jsonfile.writeFileSync(path.join(__dirname, './db.json'), db)
		}
};

module.exports = model;

// example tests
// model.reinitialize();
// model.create("a");
// model.create("b");
// model.create("c");
// console.log(model.read_all());
// console.log(model.read_one(1));
// model.update(1, "o");
// console.log(model.read_all());
// model.remove(1);
// console.log(model.read_all());
// model.reinitialize();
// console.log(model.read_all());


