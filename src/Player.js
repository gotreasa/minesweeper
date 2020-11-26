class Player {
  constructor(board) {
    this.board = board;
  }

  placeFlag(x, y) {
    this.board.squares[x][y] = '*';
    this.board.lastMove = '*';
  }
}

module.exports = Player;
