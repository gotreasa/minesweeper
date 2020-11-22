const EMPTY_BOARD = require('./fixtures/EMPTY_BOARD.js');
const Board = require('../src/Board.js');

describe('Minesweeper starts off with a blank board', () => {
  test('should have an initialised board with empty 3x3 squares', () => {
    const board = new Board();
    expect(board.squares).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
  });
  test('should print the empty board with empty 3x3 squares', () => {
    const board = new Board();
    expect(board.getBoard()).toEqual(EMPTY_BOARD);
  });
});
