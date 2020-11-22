const EMPTY_BOARD = require('./fixtures/EMPTY_BOARD.js');
const EMPTY_BOARD_WITH_STATUS = require('./fixtures/EMPTY_BOARD_WITH_STATUS.js');
const { EMPTY_BOARD_STATUS } = require('./fixtures/statuses.js');
const { INITIAL_THREE_BOMBS } = require('./fixtures/INITIAL_THREE_BOMBS');
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
    expect(board.getBoardAsASCII()).toEqual(EMPTY_BOARD);
  });
  test('should have a status indicating the game started', () => {
    expect(board.getStatus()).toEqual(EMPTY_BOARD_STATUS);
  });
  test('should print the board with the status', () => {
    expect(board.print()).toEqual(EMPTY_BOARD_WITH_STATUS);
  });
});

describe('The board initialises the location of each of the bombs', () => {
  test('should put 3 bombs on the board hidden', () => {
    const board = new Board();
    board.initialiseBombs([[' ', ' ', ' '], ['X', 'X', ' '], [' ', 'X', ' ']]);
    expect(board.bombs).toEqual(INITIAL_THREE_BOMBS);
  });
});
