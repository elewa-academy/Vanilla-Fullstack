let calc_logic  = {
	add: function(a, b) {
		return a + b;
	},
	divide: function(a, b) {
		return a / b;
	},
	multiply: function(a, b) {
		return a * b;
	},
	subtract: function(a, b) {
		return a - b;
	},
	operate: function(operation, a, b, lastResult) {
		if (b) {
			return this[operation](a, b);
		} else {
			return this[operation](a, lastResult);
		}
	}
};

module.exports = calc_logic;