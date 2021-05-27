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