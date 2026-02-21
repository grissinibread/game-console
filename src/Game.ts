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

    setWords() {
        console.log("-- Player One --")

        this.playerOne.setHintWord(prompt("Hint word: "));

        console.log("--");

        for(let i = 0; i < this.numberOfWords; i++) {
            this.playerOne.addWord(prompt(`Enter word #${i + 1}: `));
        }

        console.clear();

        console.log("-- Player Two --")

        this.playerTwo.setHintWord(prompt("Hint word: "));

        console.log("--");

        for(let i = 0; i < this.numberOfWords; i++) {
            this.playerTwo.addWord(prompt(`Enter word #${i + 1}: `));
        }

        console.clear();
    }

    startGame() {
        this.setWords();

        while(this.playerOne.wordsGuessed < this.numberOfWords &&
        this.playerTwo.wordsGuessed < this.numberOfWords) {

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
                if(i < this.currentPlayer.wordsGuessed) {
                    console.log(playerWords[i]);
                } else {
                    console.log(playerWords[i].substring(0, 1));
                }
            }

            let guess = prompt("Guess the next word: ");

            if(this.currentPlayer === this.playerOne) {
                if (guess === this.playerTwo.getWords()[this.playerOne.wordsGuessed]) {
                    this.guessedCorrectly(this.currentPlayer);
                    this.swapTurn();

                    console.log("Player One Words Guessed")
                    console.log(this.playerOne.wordsGuessed);
                    console.log(this.numberOfWords);
                }
            } else if(this.currentPlayer === this.playerTwo) {
                if (guess === this.playerOne.getWords()[this.playerTwo.wordsGuessed]) {
                    this.guessedCorrectly(this.currentPlayer);
                    this.swapTurn();

                    console.log("Player Two Words Guessed")
                    console.log(this.playerTwo.wordsGuessed);
                    console.log(this.numberOfWords);
                }

                console.clear();
            }

            if(this.playerOne.wordsGuessed === 3) {
                console.log("Player One Has Won!")
            } else if(this.playerTwo.wordsGuessed === 3) {
                console.log("Player Two Has Won!")
            }
        }
    }

    swapTurn() {
        if(this.currentPlayer === this.playerOne) {
            this.currentPlayer = this.playerTwo;
        } else {
            this.currentPlayer = this.playerOne;
        }
    }

    guessedCorrectly(player: Player) {
        if(player === this.playerOne) {
            this.playerOne.wordsGuessed++;
        } else {
            this.playerTwo.wordsGuessed++;
        }
    }
}