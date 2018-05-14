window.onload = function() {
	axios.create({ baseURL: "http://localhost:3001" });
	controller.view = view;
	controller.axios = axios;
	let addButton = document.getElementById("addButton");
	addButton.addEventListener("click", add_handler);
}