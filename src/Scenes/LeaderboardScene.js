import Phaser from 'phaser';
import helpers from '../helpers';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  async create() {
    const scores = await helpers.fetchScores().then(
      scoresObject => scoresObject.result,
    );
    const topScores = scores.sort((a, b) => b.score - a.score).slice(0, 10);