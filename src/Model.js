/* eslint no-underscore-dangle: ["error", { "allowAfterThisConstructor": true }] */
export default class Model {
  constructor() {
    this._soundOn = true;
    this._musicOn = true;
    this._bgMusicPlaying = false;
  }
  /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

  set musicOn(value) {
    this._musicOn = value;
  }

  get musicOn() {
    return this._musicOn;
  }

  set soundOn(value) {
    this._soundOn = value;
  }

  get soundOn() {
    return this._soundOn;
  }

  set bgMusicPlaying(value) {
    this._bgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this._bgMusicPlaying;
  }
}
