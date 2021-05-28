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

    this.goldIcon = this.add.sprite(40, 90, 'coin').setDisplaySize(50, 50);

    this.mountains = this.add
      .tileSprite(400, 250, null, null, 'mountain')
      .setTilePosition(200, 128)
      .setScale(1.2);

      this.distantPines = this.add
      .tileSprite(400, 325, 800, null, 'pines')
      .setTilePosition(200, 0)
      .setScale(1.2);

      this.pines = this.add
      .tileSprite(400, 410, 800, null, 'distantPines')
      .setTilePosition(200, 200)
      .setScale(1.2);

    this.ground = this.add.tileSprite(
      this.game.config.width / 2,
      this.game.config.height - 40,
      this.game.config.width,
      80,
      'ground',
    );

    this.grass = this.add
      .tileSprite(
        this.game.config.width / 2,
        this.game.config.height - 70,
        this.game.config.width,
        30,
        'grass',
      )
      .setTileScale(3.5, 4);

    this.grass = this.physics.add.existing(this.grass, true);

    this.platformGroup = this.add.group({
      removeCallback(platform) {
        platform.scene.platformPool.add(platform);
      },
    });