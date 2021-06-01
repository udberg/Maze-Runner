import Phaser from 'phaser';
import * as board from '../js/leaderboard';

class scoreBoard extends Phaser.Scene {
  constructor() {
    super('ScoreBoard');
    this.fontSize = 35;
    this.fontStep = 42;
    this.fontOptions = {
      fontSize: `${this.fontSize}px`,
      fontFamily: 'Arial',
      fill: '#002e53',
      stroke: '#fff',
      strokeThickness: 2,
    };
  }

  preload() {
    this.add.image(680, 300, 'background');
  }

  create() {
    const start = this.add
      .text(520, 120, 'Play Again', {
        fontFamily: 'Arial',
        fontSize: '35px',
        stroke: '#02ca1d',
        fill: '#fff',
        strokeThickness: 2,
      })
      .setOrigin(0.1);

    start.setInteractive();
    start.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
    const menu = this.add
      .text(700, 120, 'Menu', {
        fontFamily: 'Arial',
        fontSize: '35px',
        stroke: '#004bd6',
        fill: '#fff',
        strokeThickness: 2,
      })
      .setOrigin(0.1);

    menu.setInteractive();
    menu.on('pointerdown', () => {
      this.scene.start('Title');
    });

    this.add
      .text(500, 50, '- Coin Runner -', {
        fontFamily: 'Arial',
        stroke: '#b2f300',
        strokeThickness: 2,
        fontSize: '60px',
        fill: '#d9ff04',
      })
      .setOrigin(0.1);

    this.score = null;
    this.add
      .text(590, 180, 'Scores', {
        fontFamily: 'Arial',
        align: 'center',
        stroke: '#fff',
        strokeThickness: 2,
        fontSize: '45px',
        fill: '#493415',
      })
      .setOrigin(0.1);

    this.score = board.getScore().catch(() => {
      this.errorMessage();
    });


    this.createScore(this.score);
  }

  createScore(score) {
    let lastPositionY = 0;
    score.then((s) => {
      s.result.forEach((element) => {
        const scorePosition = [500, 245 + lastPositionY];
        this.add
          .text(
            ...scorePosition,
            `${element.user} : ${element.score}`,
            this.fontOptions,
          )
          .setOrigin(0.1);

        lastPositionY += this.fontStep;
      });
    });
  }

  errorMessage() {
    const scorePosition = [500, 170];
    this.add
      .text(
        ...scorePosition,
        'We are sorry\nWe could not get the scores\nTry later',
        this.fontOptions,
      )
      .setOrigin(0.5);
  }
}

export default scoreBoard;
