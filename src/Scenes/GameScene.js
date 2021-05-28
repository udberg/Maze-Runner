import Phaser from 'phaser';
import gameOptions from '../Config/gameOptions';
import helpers from '../helpers';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.gameOptions = gameOptions;
  }