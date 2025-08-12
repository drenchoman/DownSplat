import { atom } from 'nanostores';

export const gameStarted = atom(false);
export const twoPlayer = atom(false);
export const threePlayer = atom(false);
export const onePlayer = atom(false);
export const gameFinished = atom(false);
export const gameOver = atom(false);
export const numberOfPlayers = atom(1);
export const p1LivesText = atom(3);
export const p2LivesText = atom(3);
export const p3LivesText = atom(3);
export const gameWinner = atom();
export const p1Wins = atom(0);
export const p2Wins = atom(0);
export const p3Wins = atom(0);
