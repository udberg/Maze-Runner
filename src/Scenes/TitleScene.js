import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.gameButton = new Button(this, config.width / 2, config.height / 4, 'blueButton1', 'blueButton2', 'Play', 'Game');
    this.optionsButton = new Button(this, config.width / 2, config.height / 2 - 50, 'blueButton1', 'blueButton2', 'Options', 'Options');
    this.leaderboardButton = new Button(this, config.width / 2, config.height / 2 + 50, 'blueButton1', 'blueButton2', 'Leaderboard', 'Leaderboard');
    this.creditsButton = new Button(this, config.width / 2, config.height * (3 / 4), 'blueButton1', 'blueButton2', 'Credits', 'Credits');
