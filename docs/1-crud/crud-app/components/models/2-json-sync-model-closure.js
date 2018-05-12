let jsonfile = require('jsonfile');
let path = require('path');

let path_to_file = "../db.json";

let model = {
	reinitialize: function() {
			let db = {};
			db.meta = {};
			db.meta.nextID = 0;
			db.meta.name = "sample-project";
			db.data = {};
			jsonfile.writeFileSync(path.join(__dirname, path_to_file), db)
		},
	create: function(new_entry) {
			let db = require(path_to_file);
			let data = db.data;
			// why can't you do this?
			// let nextID = db.meta.nextID;

			data[db.meta.nextID] = new_entry;
			db.meta.nextID = db.meta.nextID + 1;
			jsonfile.writeFileSync(path.join(__dirname, path_to_file), db)
		},
	read_one: function(index) {
			let db = require(path_to_file);
			let data = db.data;
			return data[index];
		},
	read_all: function() {
			let db = require(path_to_file);
			return db.data
			//  	returns array of all data
			// let db = require('../db.json');
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
			let db = require(path_to_file);
			let index = String(_index);
			db.data[index] = new_entry;
			jsonfile.writeFileSync(path.join(__dirname, path_to_file), db)
		},
	remove: function(index) {
			let db = require(path_to_file);
			let data = db.data;
			delete data[index];
			jsonfile.writeFileSync(path.join(__dirname, path_to_file), db)
		}
};

module.exports = model;


