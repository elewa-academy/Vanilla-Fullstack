let controller = {
	model: {},
	logic: {},
	operate: function(operation, a, b) {
		// read state ("memory") from the model
	    let lastResult = this.model.get_lastResult();

	    // pass user input and state through logic (a pure function)
	    let result = this.logic.operate(operation, a, b, lastResult);

	    // update the state
	    this.model.set_lastResult(result);
    
	    // return the result
	    return result 
	}
};

module.exports = controller;