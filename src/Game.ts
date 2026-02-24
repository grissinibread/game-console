import { Player } from "./Player.ts";
import PromptSync from "prompt-sync";

export class Game {
  constructor(gameDifficulty: string, playerOne: Player, playerTwo: Player) {
    if(gameDifficulty === "1") {
      this.numberOfWords = 3;
    } else if(gameDifficulty === "2") {
      this.numberOfWords = 5;
    } else {
      this.numberOfWords = 7;
    }

    this.playerOne = playerOne;
    this.playerTwo = playerTwo;

    this.currentPlayer = playerOne;
  }

    playerOne: Player;
    playerTwo: Player;

    currentPlayer: Player;

    numberOfWords: number;

  getWinningPlayer(): Player {
    return this.playerOne.getWordsGuessed() === this.numberOfWords ?
      this.playerOne : this.playerOne;
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

  gameOver(): boolean {
    return this.playerOne.getWordsGuessed() === this.numberOfWords ||
      this.playerTwo.getWordsGuessed() === this.numberOfWords;
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
