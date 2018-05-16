let controller = {
	view: {},
	axios: {},
	create: function(_new_entry) {
		this.axios.post("/api/add", {new_entry: _new_entry})
			.then((response) => {
				this.view.render(response.data)
			})
			.catch((err) => {
				this.view.render(err);
			});
		
		// this.axios.post("/api/add", {new_entry: _new_entry}, (err, response) => {
		// 	if (err) {
		// 		this.view.render(err)
		// 	} else {
		// 		this.view.render(response.data)
		// 	};
		// })
	},
	// doesn't need a handler method since it isn't called with user input
	initialize_screen: function() {
		let message = "";
		this.axios.get("/api/add")
			.then((response) => {
				message += response.data + '\n'
			})
			.catch((err) => {
				this.view.render(err);
			});
		this.axios.get("/api/update")
			.then((response) => {
				message += response.data + '\n'
			})
			.catch((err) => {
				this.view.render(err);
			});
		this.axios.get("/api/delete")
			.then((response) => {
				message += response.data + '\n'
			})
			.catch((err) => {
				this.view.render(err);
			});
		this.view.render(message)
	}
	// methods you want to do
	//  these will be made later with the ui
}