let handler = {
	controller: {},
	create: function() {
		// clean user input
		let input_1 = document.getElementById("user-input-1").value;
		let input_2 = document.getElementById("user-input-2").value;
		let input = {
			name: input_1,
			age: input_2
		};
		// pass it to controller
		controller.create(input);
	}
}