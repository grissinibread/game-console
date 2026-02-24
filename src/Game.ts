import { Player } from "./Player.ts";
import PromptSync from "prompt-sync";

export type GameDifficulty = "EASY" | "NORMAL" | "HARD";
let prompt = PromptSync();

export class Game {
  constructor(gameDifficulty: GameDifficulty, playerOne: Player, playerTwo: Player) {
    if(gameDifficulty === "EASY") {
      this.numberOfWords = 3;
    } else if(gameDifficulty === "NORMAL") {
      this.numberOfWords = 5;
    } else {
      this.numberOfWords = 7;
    }

    this.gameDifficulty = gameDifficulty;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;

    this.currentPlayer = playerOne;
  }

    playerOne: Player;
    playerTwo: Player;
    currentPlayer: Player;

    gameDifficulty: GameDifficulty;

    numberOfWords: number;

  getWinningPlayer(): Player {
    return this.playerOne.getWordsGuessed() === this.numberOfWords ?
      this.playerOne : this.playerOne;
  }

  gameOver(): boolean {
    return this.playerOne.getWordsGuessed() === this.numberOfWords ||
            this.playerTwo.getWordsGuessed() === this.numberOfWords;
  }

  getCurrentPlayer(): Player {
    return this.currentPlayer;
  }

  getOpponent(): Player {
    return this.currentPlayer === this.playerOne
            ? this.playerTwo : this.playerOne;
  }

  getNumberOfWords(): number {
    return this.numberOfWords;
  }

  swapTurn(): void {
    this.currentPlayer = this.getOpponent();
  }

  guess(word: string): void {
    let player: Player = this.currentPlayer;
    let opponent: Player = this.getOpponent();

    let wordsGuessed: number = player.getWordsGuessed();

    if(word === opponent.getWords()[wordsGuessed]) {
      player.guessedWordCorrectly();
    }

    this.swapTurn();
  }
}
