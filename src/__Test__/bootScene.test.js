import 'jest-canvas-mock';
import BootScene from '../Scenes/BootScene';

test('BootScene to be a function', () => {
  expect(typeof BootScene).toBe('function');
});

test('BootScene to not be undefined', () => {
  expect(typeof BootScene).not.toBe('undefined');
});
