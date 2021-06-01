import Phaser from 'phaser';
import * as board from '../js/leaderboard';

export default class gameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  preload() {
    this.load.html('nameform', '../src/assets/nameform.html');

    this.add.image(680, 300, 'background');
  }

  create() {
    const { width } = this.scale;

    const layOutX = width / 2 - 200;

    const saveScore = this.add.dom(620, 355).createFromCache('nameform');
    saveScore.addListener('click');

    this.tweens.add({
      targets: saveScore,
      y: 365,
      duration: 3000,
      ease: 'Power3',
    });

    const coinsPoints = localStorage.getItem('points');
    const warning = this.add.text(
      layOutX + 100,
      380,
      'Cannot continue, enter your player name',
      {
        fontSize: '12px',
        fill: '#fff',
      },
    );

    warning.visible = false;

    // Compute the final score
    this.text1 = this.add.text(layOutX, 100, 'Game Over!', {
      fontFamily: 'Arial',
      align: 'center',
      stroke: '#fff',
      strokeThickness: 2,
      fontSize: '49px',
      fill: '#eb0000',
    });

    this.text1 = this.add.text(layOutX, 180, `Coins: ${coinsPoints}`, {
      fontFamily: 'Arial',
      stroke: '#fff',
      strokeThickness: 2,
      fontSize: '32px',
      fill: '#037720',
    });

    this.tweens.add({
      targets: this.text1,
      alpha: {
        from: 0,
        to: 1,
      },
      ease: 'Cubic.easeIn',
      duration: 1000,
    });

    const playAgain = this.add
      .text(500, 500, 'Play Again', {
        fontFamily: 'Arial',
        fontSize: '35px',
        stroke: '#02ca1d',
        fill: '#fff',
        strokeThickness: 2,
      })
      .setOrigin(0.1);

    playAgain
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start('GameScene');
      })
      .on('pointerout', () => {
        playAgain.setStyle({
          stroke: '#fff',
          fill: '#003366',
        });
      });
    const scoreBoard = this.add
      .text(500, 245, 'Scoreboard', {
        fontFamily: 'Arial',
        stroke: '#fff',
        strokeThickness: 2,
        fontSize: '35px',
        fill: '#00276e',
      })
      .setOrigin(0.2);
    scoreBoard.setInteractive().on('pointerdown', () => {
      this.scene.start('ScoreBoard');
    });
    const menu = this.add
      .text(473, 295, 'Menu', {
        fontFamily: 'Arial',
        stroke: '#fff',
        strokeThickness: 2,
        fontSize: '35px',
        fill: '#00276e',
      })
      .setOrigin(0.1);
    menu.setInteractive().on('pointerdown', () => {
      this.scene.start('Title');
    });

    saveScore.on('click', function fn(event) {
      if (event.target.name === 'playButton') {
        const inputText = this.getChildByName('nameField');

        //  When text is send
        if (inputText.value !== '') {
          warning.visible = false;
          //  Turn off the click events
          this.removeListener('click');
          //  Remove HTML elements
          this.setVisible(false);
          //  Set Score
          board.setScore(inputText.value, coinsPoints);
          window.game.scene.start('leaderboard');
        } else {
          //  Flash the prompt
          warning.visible = true;
        }
      }
    });
  }
}
