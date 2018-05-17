var controller = {
	axios: {},
	view: {},
	add: function(_a, _b) {
		// call to model/logic (the API, via axios)
		this.axios.post('/add', {a: _a, b: _b}) 
			.then((response) => {
				// call to view
				this.view.render_add(response.data);
			})
			.catch((error) => {
				if(error) {	
					console.log(error);
				}
			});
	},
	calc: function() {
		this.view.render_calc();
	},
	star: function() {
		this.view.render_star();
	},
	last_result: function() {
		this.axios.get("/last_result") 
			.then((response) => {
				// call to view
				this.view.render_last_result(response.data);
			})
			.catch((error) => {
				if(error) {	
					console.log(error);
				}
			});
	}
};








