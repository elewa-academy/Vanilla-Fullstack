let jsonfile = require('jsonfile');
let path = require('path');

let model = {
	reset: function(cb) {
			let notes = {};
			notes.meta = {};
			notes.meta.nextID = 0;
			notes.meta.name = "sample-project";
			notes.data = {};
			jsonfile.writeFile(path.join(__dirname, './notes.json'), notes, cb);
		},
	create: function(new_entry, cb) {
			let notes = require('./notes.json');
			let data = notes.data;

			data[notes.meta.nextID] = new_entry;
			cb2 = (err) => {
				cb(err, notes.meta.nextID, new_entry);
			}
			notes.meta.nextID++;
			jsonfile.writeFile(path.join(__dirname, './notes.json'), notes, cb2);
		},
	read_one: function(index, cb) {
			let notes = require('./notes.json');
			let data = notes.data;
			cb(data[index]);
		},
	read_all: function(cb) {
			let notes = require('./notes.json');
			cb(notes.data);
		},
	update: function(index, new_entry, cb) {
			let notes = require('./notes.json');
			notes.data[index] = new_entry;		
			cb2 = (err) => {
				cb(err, index, new_entry);
			};
			jsonfile.writeFile(path.join(__dirname, './notes.json'), notes, cb2)
		},
	remove: function(index, cb) {
			let notes = require('./notes.json');
			let data = notes.data;
			cb2 = (err) => {
				cb(err, index, data[index]);
			};	
			delete data[index];	
			jsonfile.writeFile(path.join(__dirname, './notes.json'), notes, cb2)
		}
};

module.exports = model;


