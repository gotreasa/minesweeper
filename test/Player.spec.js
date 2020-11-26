const Player = require('../src/Player.js');

describe('Player creation', () => {
  test('expect player to be initialised', () => {
    const player = new Player();
    expect(player).toBeInstanceOf(Player);
  });
});
