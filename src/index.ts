import { Game } from "./Game.ts";
import { Player } from "./Player.ts";
import PromptSync from "prompt-sync";

console.clear();

let prompt = PromptSync();
console.log("Turn Based Game");
console.log("Select Difficulty");
console.log("(1) Easy");
console.log("(2) Normal");
console.log("(3) Hard");
let gameDifficulty = prompt("");

let game: Game;

if(gameDifficulty === "1") {
    game = new Game("EASY");
} else if(gameDifficulty === "2") {
    game = new Game("NORMAL");
} else {
    game = new Game("HARD");
}

console.log("-- Player One --");

game.currentPlayer.setHintWord(prompt("Hint word: "));

console.log("--");

for(let i = 0; i < game.numberOfWords; i++) {
  game.currentPlayer.addWord(prompt(`Enter word #${i + 1}: `));
}

console.clear();

console.log("-- Player Two --")

game.getOpponent().setHintWord(prompt("Hint word: "));

console.log("--");

for(let i = 0; i < game.numberOfWords; i++) {
  game.getOpponent().addWord(prompt(`Enter word #${i + 1}: `));
}

console.clear();

game.startGame();
