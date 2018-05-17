window.onload = function() {
	controller.axios = axios.create({ baseURL: "http://localhost:3001/api" });
	controller.view = view;
	
	let calc_button = document.getElementById("calc-button");
	calc_button.addEventListener("click", render_calc);

	let star_button = document.getElementById("star-button");
	star_button.addEventListener("click", render_star);
}

