var api_connection = {
	datAxios: {},
	get: function(path) {
		path = path.join("/");
		this.datAxios.get(path) 
			.then((response) => {
				// this is like your view
				// replace it with dom stuff to have browser UI
				console.log(response.data);
			})
			.catch((error) => {
				if(error) {	
					console.log(error);
				}
			});
	},
	post: function(path, body) {
		
		path = path.join("/");
		this.datAxios.post(path, body) 
			.then((response) => {
				// replace it with dom stuff to have browser UI
				console.log(response.data);
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








