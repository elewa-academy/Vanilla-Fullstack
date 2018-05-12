let view = { // for the terminal
	display_result: function(sum) {
		console.log(sum);
	},
	// react concerns style
	display_addition: function(a, b) {
		let result = a + b;
		console.log(result);
	}
}

module.exports = view;