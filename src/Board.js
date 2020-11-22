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

  // eslint-disable-next-line class-methods-use-this
  getStatus() {
    return '[Sandbox 3x3] Game created';
  }

  print() {
    return `${this.getBoard()}\n${this.getStatus()}`;
  }
}
module.exports = Board;
