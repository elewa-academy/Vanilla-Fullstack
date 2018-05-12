var view = {
	repopulateBoard: function (boardState) {
		var row = '';
		console.log()
		for(var i = 0; i < 3; i++) {
			console.log('----------');
			for(var j = 0; j < 3; j++) {
				if (boardState[i][j] != null) {
					row = row + '|' + boardState[i][j];
				} else {
					row = row + '| ';
				}
			};
			console.log(row, '|');
			row = '';
		};
		console.log('----------\n\n');
	},
	buildBoard: function() {
		console.log('----------');
		console.log('|  |  |  |');
		console.log('----------');
		console.log('|  |  |  |');
		console.log('----------');
		console.log('|  |  |  |');
		console.log('----------\n');
	},
	alert: function(string) {
		console.log(string)
	}
}

module.exports = view;