window.onload = function() {
	controller.axios = axios.create({ baseURL: "http://localhost:3001/api" });
	controller.view = view;
	
	// setting event listeners is a perfect example of context and closure

	let calc_button = document.getElementById("calc-button");
	calc_button.addEventListener("click", handler.calc);
	// calc_utton.addEventListener("click", controller.calc.bind(controller));

	let last_result_button = document.getElementById("last-result-button");
	last_result_button.addEventListener("click", handler.last_result);
	// last_result_button.addEventListener("click", controller.last_result.bind(controller));

	let star_button = document.getElementById("star-button");
	star_button.addEventListener("click", handler.star);
	// star_button.addEventListener("click", controller.star.bind(controller));
}

