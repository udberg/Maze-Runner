import Phaser from 'phaser';
import gameOptions from '../Config/gameOptions';
import helpers from '../helpers';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.gameOptions = gameOptions;
  }

  create() {
    this.secondsElapsed = 0;
    this.secondsRemaining = 60;
    this.score = 0;
    this.playerJumps = this.gameOptions.jumps;
    this.coinGroup = this.add.group();
    this.collectedCoinGroup = this.add.group();
    this.physics.resume();
    this.anims.resumeAll();
    this.events.once('gameOver', () => {
      this.gameOver();
    });

    this.sky = this.add.tileSprite(400, 150, null, null, 'sky').setScale(2);

    this.timeDisplay = this.add.text(70, 20, `${this.secondsRemaining}`, {
      color: 'rgb(0, 255, 0)',
      fontSize: '44px',
      fontWeight: 'bold',
      border: '1px solid grey',
      background: 'rgba(200, 200, 200, 0.8)',
    });

    this.timeIcon = this.add.sprite(
      this.timeDisplay.x - 30,
      this.timeDisplay.y + 20,
      'stopwatch',
    ).setDisplaySize(40, 40).setTintFill(0x999999);

    this.goldDisplay = this.add.text(70, 67, `${this.score}`, {
      color: 'gold',
      fontSize: '50px',
      fontWeight: 'bold',
    });