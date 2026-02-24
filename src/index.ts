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

let playerOne: Player = new Player();
let playerTwo: Player = new Player();
let game: Game;

if(gameDifficulty === "1") {
    game = new Game("EASY", playerOne, playerTwo);
} else if(gameDifficulty === "2") {
    game = new Game("NORMAL", playerOne,  playerTwo);
} else {
    game = new Game("HARD", playerOne, playerTwo);
}

console.log("-- Player One --");

game.getCurrentPlayer().setHintWord(prompt("Hint word: "));

console.log("--");

for(let i = 0; i < game.numberOfWords; i++) {
  game.getCurrentPlayer().addWord(prompt(`Enter word #${i + 1}: `));
}

console.clear();

console.log("-- Player Two --")

game.getOpponent().setHintWord(prompt("Hint word: "));

console.log("--");

for(let i = 0; i < game.numberOfWords; i++) {
  game.getOpponent().addWord(prompt(`Enter word #${i + 1}: `));
}

console.clear();

while(!game.gameOver()) {
  let playerWords: string[];

  if(game.getCurrentPlayer() === playerOne) {
    console.log("---- Player One's Turn ----");
  } else {
    console.log("---- Player Two's Turn ----");
  }

  console.log("Hint Word:" + game.getOpponent().getHintWord());
  playerWords = game.getOpponent().getWords();

  for(let i = 0; i < game.getNumberOfWords(); i++) {
    if(i < game.getCurrentPlayer().getWordsGuessed()) {
      console.log(playerWords[i]);
    } else {
      console.log(playerWords[i].substring(0, 1));
    }
  }
  
  let guess = prompt("Guess the next word: ");

  game.guess(guess);
}
