import Model from '../src/Model';

describe('constructs a new Model object with the desired properties', () => {
  const model = new Model();
  const requiredProperties = ['soundOn', 'musicOn', 'bgMusicPlaying'];

  it('returns an object whose prototype is a Model', () => {
    expect(
      Object.getPrototypeOf(model) === Object.getPrototypeOf(new Model()),
    ).toBe(true);
  });