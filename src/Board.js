class Board {
  constructor() {
    this.squares = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  }

  getBoard() {
    let board = '';
    this.squares.forEach((row) => {
      board += '+-+-+-+\n';
      board += `|${row[0]}|${row[1]}|${row[2]}|\n`;
    });
    board += '+-+-+-+\n';
    return board;
  }
}
module.exports = Board;
