import Phaser from 'phaser';
import helpers from '../src/helpers';

describe('gets a random song selection', () => {
  const songInfo = helpers.getRandomSong();
  const possibleTitles = ['bigPoppa', 'putItOn', 'californiaLove', 'msJackson'];
  const possiblePaths = [
    'assets/music/big_poppa.mp3',
    'assets/music/put_it_on.mp3',
    'assets/music/california_love.mp3',
    'assets/music/ms_jackson.mp3',
  ];

  it("returns an array where the first element is the key of one of the project's possible background tracks", () => {
    expect(possibleTitles.includes(songInfo[0])).toBe(true);
  });

  it("returns an array where the second element is the path of one of the project's possible background tracks", () => {
    expect(possiblePaths.includes(songInfo[1])).toBe(true);
  });
});