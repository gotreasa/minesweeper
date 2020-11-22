const EMPTY_BOARD = require('./fixtures/EMPTY_BOARD.js');
const { EMPTY_BOARD_STATUS } = require('./fixtures/statuses.js');
const Board = require('../src/Board.js');

describe('Minesweeper starts off with a blank board', () => {
  let board;
  beforeEach(() => {
    board = new Board();
  });
  test('should have an initialised board with empty 3x3 squares', () => {
    expect(board.squares).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
  });
  test('should print the empty board with empty 3x3 squares', () => {
    expect(board.getBoard()).toEqual(EMPTY_BOARD);
  });
  test('should have a status indicating the game started', () => {
    expect(board.getStatus()).toEqual(EMPTY_BOARD_STATUS);
  });
});
