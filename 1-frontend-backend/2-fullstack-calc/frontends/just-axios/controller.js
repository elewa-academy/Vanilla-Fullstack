var controller = {
	axios: {},
	view: {},
	add: function(_a, _b) {
		// call to model/logic (the API, via axios)
		this.axios.post('/add', {a: _a, b: _b}) 
			.then((response) => {
				// call to view
				view.render(response.data);
			})
			.catch((error) => {
				if(error) {	
					console.log(error);
				}
			});
	}
};








