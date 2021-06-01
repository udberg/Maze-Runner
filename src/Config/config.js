import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'thegame',
  width: 1334,
  height: 750,
  dom: {
    createContainer: true,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};
