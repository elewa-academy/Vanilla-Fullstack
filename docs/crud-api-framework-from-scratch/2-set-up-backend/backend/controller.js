let controller = {
	model: {},
	read_all: function() {
		return this.model.read_all();
	},
	read_one: function(ID) {
		return this.mode.read_one();
	},
	create: function(new_object) {
		this.model.create(new_object);
		return 'successfully created ' + new_object;s
	},
	update: function(ID, new_object) {
		this.model.update(ID, new_object);
		return 'successfully updated item ' + ID + " with value " + new_object;
	},
	remove: function(ID) {
		this.model.remove(ID);
		return "successfully removed item " + ID;
	}
};

module.exports = controller;