import 'jest-canvas-mock';
import GameScene from '../Scenes/GameScene';

test('Gamescene to be a funtion', () => {
  expect(typeof GameScene).toBe('function');
});

test('GameScene to not be undefined', () => {
  expect(typeof GameScene).not.toBe('undefined');
});
