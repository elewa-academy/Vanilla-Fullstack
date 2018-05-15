let controller = {
	model: {},
	logic: {},
	operate: function(operation, a, b) {
	    let lastResult = this.model.get_lastResult();
	    let result = this.logic.operate(operation, a, b, lastResult);
	    this.model.set_lastResult(result);
	    return result 
	},
	operate_async: function(operation, a, b, cb) {
	    let lastResult = this.model.get_lastResult();
	    let result = this.logic.operate(operation, a, b, lastResult);
	    this.model.set_lastResult(result);
	    // return result 
	    cb(null, result);
	}
}

module.exports = controller;