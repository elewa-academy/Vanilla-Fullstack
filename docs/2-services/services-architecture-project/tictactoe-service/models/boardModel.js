// will be mongoose
var boardModel = { 
	name: 'boardState',
	// will be mongo
	boardState: [],
	setBoardState: function(newState) {
			this.boardState = newState;
		},
	getBoardState: function() {
			return this.boardState;
		},
	// consumes callback
	addMove: function(row, column, nextPlayer, cb) {
			var err;
			if(this.boardState[row][column] == null) {	
				if(nextPlayer) {
					this.boardState[row][column] = 'x';
				} else {
					this.boardState[row][column] = 'o';
				};
				err = false;
			} else {
				err = true;
			};
			cb(err);
		}
	};

module.exports = boardModel;