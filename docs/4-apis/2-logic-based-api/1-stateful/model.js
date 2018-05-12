let model = {
	// this number disappears every time the server dies
	lastResult: 0,
	get_lastResult: function() {
		return this.lastResult;
	},
	set_lastResult: function(new_lastResult) {
		this.lastResult = new_lastResult;
	}
}

module.exports = model;