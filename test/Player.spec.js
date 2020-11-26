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
  test('expect player to mark a flag with a *', () => {
    const board = new Board();
    const player = new Player(board);
    player.placeFlag(1, 1);
    expect(board.squares).toEqual(FLAG_AT_1_1);
  });
});
