const Board = require('../src/Board.js');

describe('Minesweeper starts off with a blank board', () => {
  test('it should have an initialised board with empty 3x3 squares', () => {
    const board = new Board();
    expect(board.squares).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
  });
});
