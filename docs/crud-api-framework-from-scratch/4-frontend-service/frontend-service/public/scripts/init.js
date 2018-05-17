window.onload = function() {
	let axios_connected = axios.create({
		baseURL: "http://localhost:3001"
	});
	handler.controller = controller;
	controller.view = view;
	controller.axios = axios_connected;
	controller.initialize_screen();
}