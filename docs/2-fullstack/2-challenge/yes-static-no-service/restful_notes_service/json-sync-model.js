let jsonfile = require('jsonfile');
let path = require('path');

let model = {
	reset: function() {
			let notes = {};
			notes.meta = {};
			notes.meta.nextID = 0;
			notes.meta.name = "sample-project";
			notes.data = {};
			jsonfile.writeFileSync(path.join(__dirname, './notes.json'), notes)
		},
	create: function(new_entry) {
			let notes = require('./notes.json');
			let data = notes.data;
			// why can't you do this?
			// let nextID = notes.meta.nextID;

			data[notes.meta.nextID] = new_entry;
			notes.meta.nextID = notes.meta.nextID + 1;
			jsonfile.writeFileSync(path.join(__dirname, './notes.json'), notes)
			return notes.meta.nextID - 1;
		},
	read_one: function(index) {
			let notes = require('./notes.json');
			let data = notes.data;
			return data[index];
		},
	read_all: function() {
			let notes = require('./notes.json');
			return notes.data
			//  	returns array of all data
			// let notes = require('./notes.json');
			// let data = notes.data;
			// let returner = [];
			// for (let property in data) {				
			// 	let entry = {};
			// 	entry[property] = data[property];
			// 	returner.push(entry);
			// };
			// return returner;
		},
	update: function(_index, new_entry) {
			let notes = require('./notes.json');
			let index = String(_index);
			notes.data[index] = new_entry;
			jsonfile.writeFileSync(path.join(__dirname, './notes.json'), notes)
		},
	remove: function(index) {
			let notes = require('./notes.json');
			let data = notes.data;
			delete data[index];
			jsonfile.writeFileSync(path.join(__dirname, './notes.json'), notes)
		}
};

module.exports = model;


