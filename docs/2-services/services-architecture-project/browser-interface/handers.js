window.addEventListener('DOMContentLoaded', function() {
	handlers.init();
});

// event listeners for play are in html attributes

var handlers = {
	play: function(box) {
			var row = box.parentElement.getAttribute('row');
			var column = box.getAttribute('column');
			app.play(row, column);
		},
	init: function() {
			controller.view.buildBoard();
		}	
};