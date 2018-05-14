var api_connection = {
	datAxios: {},
	// these are just like asynchronous controller methods
	// just with promises instead of callbacks
	post: function(path, body) {
		path = path.join("/");
		// call to model/logic
		this.datAxios.post(path, body) 
			.then((response) => {
				// call to view
				view.render(response.data);
			})
			.catch((error) => {
				if(error) {	
					console.log(error);
				}
			});
	},
	initialize: function(URL) {	
		this.datAxios = axios.create({
		  baseURL: URL
		});
		console.log("successfully configured to call ", URL)
	}
};








