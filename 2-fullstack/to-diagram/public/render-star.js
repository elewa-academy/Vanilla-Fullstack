function render_star() {
	let container = document.getElementById("container");

	// delete everything in the div
	while (container.firstChild) {
	    container.removeChild(container.firstChild);
	}

	// draw new contents
	container.innerHTML = "star";
}