import { Game } from "./Game.ts";
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

game.startGame();