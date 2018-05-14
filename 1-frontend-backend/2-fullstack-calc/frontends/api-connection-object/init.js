window.onload = function() {
	api_connection.initialize("http://localhost:3001");
	let addButton = document.getElementById("addButton");
	addButton.addEventListener("click", add_handler);
}