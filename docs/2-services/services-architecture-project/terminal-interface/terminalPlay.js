// notice there was no need to specify a file in this folder
//		node automatically exports "index.js" unless you specify otherwise
var controller = require('../tictactoe-service');
var view = require('./view');

controller.view.buildBoard();

console.log('play at 0, 0')
app.play(0, 0);

console.log('play at 0, 1')
app.play(1, 0);

console.log('play at 1, 1')
app.play(1, 1);

console.log('play at 0, 0')
app.play(0, 0);
