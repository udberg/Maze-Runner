import Phaser from 'phaser';
import Button from '../Objects/Button';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(620, 100, 'Options', {
      fontSize: 40,
      fontFamily: 'Arial',
    });
    this.musicButton = this.add.image(600, 200, 'checkedBox');
    this.musicText = this.add.text(650, 190, 'Music Enabled', {
      fontSize: 24,
      fontFamily: 'Arial',
    });

    this.soundButton = this.add.image(600, 300, 'checkedBox');
    this.soundText = this.add.text(650, 290, 'Sound Enabled', {
      fontSize: 24,
      fontFamily: 'Arial',
    });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on(
      'pointerdown',
      () => {
        this.model.musicOn = !this.model.musicOn;
        this.updateAudio();
      },
    );

    this.soundButton.on(
      'pointerdown',
      () => {
        this.model.soundOn = !this.model.soundOn;
        this.updateAudio();
      },
    );

    this.menuButton = new Button(
      this,
      700,
      500,
      'blueButton1',
      'blueButton2',
      'Menu',
      'Title',
    );

    this.updateAudio();
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkedBox');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }

    if (this.model.soundOn === false) {
      this.soundButton.setTexture('box');
    } else {
      this.soundButton.setTexture('checkedBox');
    }
  }
}
