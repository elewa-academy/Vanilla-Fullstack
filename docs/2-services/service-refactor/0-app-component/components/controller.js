// "scripts" that use view, logic, model to enable user stories

let controller = {
	view: {},
	logic: {},
	model: {},
	add: function(num_1, num_2) {
		let result = this.logic.add(num_1, num_2);
		this.view.display_result(result);
	},
	subtract: function(num_1, num_2) {
		let result = this.logic.subtract(num_1, num_2);
		this.view.display_result(result);
	},
	exponents: function(num_1, num_2) 
		let result = this.logic.exponents(num_1, num_2);
		this.view.display_result(result);
	},
	add_then_subtract: function(num_1, num_2) {
		let result = this.logic.add(num_1, num_2);
		result = this.logic.subtract(result, num_2);
		this.view.display_result(result);
	},
	add_async: function(num_1, num_2) {
		this.logic.add_async(num_1, num_2, (err, result) => { // use arrow function for closure
			if (err) {
				this.view.display_result(err);
			} else {
				this.view.display_result(result);
			}
		})
	}, 
	add_async_bind: function(num_1, num_2) { // this does 
		function cb(err, result)w {
			if (err) {
				this.view.display_result(err);
			} else {
				this.view.display_result(result);
			}
		};
		let bound_cb = cb.bind(this)
		this.logic.add_async(num_1, num_2, bound_cb)
	},
	add_with_lastresult: function() {
		// challenge
	},
	help: function() {
		let operations = Object.keys(this);
		this.view.display_result(operations);
	}
}

module.exports = controller;