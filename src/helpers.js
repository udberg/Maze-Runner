import Phaser from 'phaser';

const fetch = require('node-fetch');

export default {
  calculateNextPlatformHeight: (previousPlatform, player, game) => {
    let lowestPlatformHeight;
    let highestPlatformHeight;

    if (player) {
      lowestPlatformHeight = Math.min(
        game.config.height * 0.745,
        player.y + 100,
      );
      if (player.y > 450) {
        highestPlatformHeight = 425;
      } else {
        highestPlatformHeight = Math.max(
          game.config.height * 0.275,
          player.y - 75,
        );
      }
    }

    const nextHeight = Phaser.Math.Between(
      lowestPlatformHeight,
      highestPlatformHeight,
    );

    if (nextHeight > 0) {
      return nextHeight;
    }
    return previousPlatform.y;
  },
  