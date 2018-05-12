var app = require('../tictactoe-service');
var view = require('./view');

app.init(view);

var expected = [
			['x', null, null],
			[null, null, null],
			[null, null, null]
		];
// why is this app difficult to test?
var result = app.play(0, 0);

var passed = true;
var results = [];

for (var i = 0; i < 3; i++) {
	for (var j = 0; j < 3; j++) {
		if (result[i][j] != expected[i][j]) {
			passed = false;
			results.push([i, j])
		}
	}
}

if (passed) {
	console.log('pass');
} else {
	console.log('fail', results);
}