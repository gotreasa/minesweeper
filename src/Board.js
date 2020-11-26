class Board {
  constructor() {
    this.squares = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  }

  getBoardAsASCII() {
    let board = '';
    this.squares.forEach((row) => {
      board += '+-+-+-+\n';
      board += `|${row[0]}|${row[1]}|${row[2]}|\n`;
    });
    board += '+-+-+-+\n';
    return board;
  }

  initialiseBombs(bombs) {
    this.bombs = bombs;
  }

  // eslint-disable-next-line class-methods-use-this
  getStatus() {
    let status = 'Game created';
    if (this.lastMove === '*') {
      status = 'Square flagged as bomb.';
    }
    return `[Sandbox 3x3] ${status}`;
  }

  print() {
    // eslint-disable-next-line no-console
    console.log(`${this.getBoardAsASCII()}\n${this.getStatus()}`);
  }
}
module.exports = Board;
