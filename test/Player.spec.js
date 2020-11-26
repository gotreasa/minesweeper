const Board = require('../src/Board.js');
const Player = require('../src/Player.js');
const { FLAG_AT_1_1 } = require('./fixtures/moves.js');

describe('Player creation', () => {
  test('expect player to be initialised', () => {
    const player = new Player();
    expect(player).toBeInstanceOf(Player);
  });
});

describe('Player moves', () => {
  let board;
  let player;
  beforeEach(() => {
    board = new Board();
    player = new Player(board);
  });
  test('expect player to mark a flag with a *', () => {
    player.placeFlag(1, 1);
    expect(board.squares).toEqual(FLAG_AT_1_1);
  });
  test('expect last move to be stored', () => {
    player.placeFlag(1, 1);
    expect(board.lastMove).toBe('*');
  });
});
