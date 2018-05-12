var data_model_array = {
	db: // array of objects
	create(new_object) {
		// assigns a unique ID to each object
		//   once an ID has been used for one object, it can never be used for another
		//   once an object has been given an ID, it can never be given a new one
		// adds the object to db
	},
	read_one(entry_id) {
		return // object associated with that id
	},
	read_all() {
		return // all objects
	}
	update(entry_id, key_to_change, new_value) {
		// replace said entry with said value
	},
	remove(entry_id) {
		// remove object with said id
		// this operation must not change other objects' id's
	}
};
