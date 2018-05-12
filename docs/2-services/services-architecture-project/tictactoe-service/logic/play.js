function play(row, column) {
	var nextPlayer = this.models.playerState.getNextPlayer();
	// it's kind of really important that the callback is an arrow function
	this.models.boardState.addMove(row, column, nextPlayer, (err) => {
		if(err) {
			this.view.alert('foo\'.  you cant do that.');
		} else {
			var newBoard = this.models.boardState.getBoardState();
			this.view.repopulateBoard(newBoard);
			this.models.playerState.togglePlayer();		
		}
	});
};

module.exports = play;