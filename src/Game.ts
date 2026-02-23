import { Player } from "./Player.ts";
import PromptSync from "prompt-sync";

export type GameDifficulty = "EASY" | "NORMAL" | "HARD";
let prompt = PromptSync();

export class Game {
    constructor(gameDifficulty: GameDifficulty) {
        if(gameDifficulty === "EASY") {
            this.numberOfWords = 3;
        } else if(gameDifficulty === "NORMAL") {
            this.numberOfWords = 5;
        } else {
            this.numberOfWords = 7;
        }

        this.gameDifficulty = gameDifficulty;
    }

    playerOne: Player = new Player();
    playerTwo: Player = new Player();
    currentPlayer: Player = this.playerOne;

    gameDifficulty: GameDifficulty;

    numberOfWords: number;

    startGame() {
        while(!this.gameOver()) {

            let playerWords: string[];

            if(this.currentPlayer === this.playerOne) {
                console.log("---- Player One's Turn ----")
                console.log("Hint Word:" + this.playerTwo.getHintWord());
                playerWords = this.playerTwo.getWords();
            } else {
                console.log("---- Player Two's Turn ----")
                console.log("Hint Word:" + this.playerOne.getHintWord());
                playerWords = this.playerOne.getWords();
            }

            for(let i = 0; i < this.numberOfWords; i++) {
                if(i < this.currentPlayer.getWordsGuessed()) {
                    console.log(playerWords[i]);
                } else {
                    console.log(playerWords[i].substring(0, 1));
                }
            }

            let guess = prompt("Guess the next word: ");

            if(this.currentPlayer === this.playerOne) {
                if (guess === this.playerTwo.getWords()[this.playerOne.getWordsGuessed()]) {
                    this.currentPlayer.guessedWordCorrectly();
                    this.currentPlayer = this.getOponent();

                    console.log("Player One Words Guessed")
                    console.log(this.playerOne.getWordsGuessed());
                    console.log(this.numberOfWords);
                }
            } else if(this.currentPlayer === this.playerTwo) {
                if (guess === this.playerOne.getWords()[this.playerTwo.getWordsGuessed()]) {
                    this.currentPlayer.guessedWordCorrectly();
                    this.currentPlayer = this.getOponent();

                    console.log("Player Two Words Guessed")
                    console.log(this.playerTwo.getWordsGuessed());
                    console.log(this.numberOfWords);
                }

                console.clear();
            }

        }
      console.log(this.getWinningPlayer());
    }

  getWinningPlayer(): Player {
    return this.playerOne.getWordsGuessed() === this.numberOfWords ?
      this.playerOne : this.playerOne;
  }

  gameOver() {
    return this.playerOne.getWordsGuessed() === this.numberOfWords ||
            this.playerTwo.getWordsGuessed() === this.numberOfWords;
  }

  getOponent(): Player {
    return this.currentPlayer === this.playerOne
            ? this.playerTwo : this.playerOne;
  }
}
