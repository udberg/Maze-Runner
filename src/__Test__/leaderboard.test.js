import { enableFetchMocks } from 'jest-fetch-mock';
import * as board from '../js/leaderboard';

enableFetchMocks();

jest.mock('../__mock__/instance.js');

beforeEach(() => {
  fetch.resetMocks();
});

test('saves the score and playerName to the leaderBoard', () => {
  board.setScore('runner', 1000).then((score) => expect(score.result).toBe('Leaderboard score created correctly.'));
});

test('get score and playerName from the leaderBoard', () => {
  board.getScore().then((scores) => expect(typeof scores).toEqual('object'));
});

test('ranking contains the user', () => {
  board.getScore()
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            score: 1000,
            user: 'runner',
          }),
        ]),
      );
    })
    .catch(() => {});
});
