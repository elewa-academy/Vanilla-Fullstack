var controller = require('./controllers/controller');
var bm = require('./models/boardModel');
var pm = require('./models/playerModel');
var _play = require('./logics/play');



bm.setBoardState([
		[null, null, null],
		[null, null, null],
		[null, null, null]
	]);
var firstPlayer = true;
pm.setPlayerState(firstPlayer);
controller.addModel(bm);
controller.addModel(pm);
controller.setView(view);
controller.play = _play;


module.exports = controller;

// using this index would require you to modify the docs