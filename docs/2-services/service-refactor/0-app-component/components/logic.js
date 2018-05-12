// this is an object of pure functions only

let logic = {
	add: function(num_1, num_2) {
		let returner;
		if(typeof num_1 == "number" && typeof num_2 == "number") {
			
			returner = num_1 + num_2;

		} else if (typeof num_1 == "number" && typeof num_2 !== "number") {
			
			returner = "num_2 is not a number"

		} else if(typeof num_1 !== "number" && typeof num_2 == "number") {
			
			returner = "num_1 is not a number"

		} else {
			
			returner = "both arguments are not numbers"

		}
		return returner;
	},
	subtract: function(num_1, num_2) {
				let returner;
		if(typeof num_1 == "number" && typeof num_2 == "number") {
			
				returner = num_1 - num_2;

		} else if (typeof num_1 == "number" && typeof num_2 !== "number") {
			
			returner = "num_2 is not a number"

		} else if(typeof num_1 !== "number" && typeof num_2 == "number") {
			
			returner = "num_1 is not a number"

		} else {
			
			returner = "both arguments are not numbers"

		}
		return returner;
	},
	exponents: function(num_1, num_2) {
		return Math.pow(num_1, num_2)
	},
	add_async: function(num_1, num_2, cb) {
		let result = this.add(num_1, num_2);
		if(typeof result == "number") {
			cb(null, result);
		} else {
			cb(result);
		}
	}
}

module.exports = logic;