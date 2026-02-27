import { Game } from "./Game.ts";
import { Player } from "./Player.ts";

let game: Game;
let playerOne: Player;
let playerTwo: Player;

beforeEach(() => {
  playerOne = new Player();
  playerTwo = new Player();
});

describe("Game difficulty tests.", () => {
    test("If game is set to easy, the number of words for the game should be 3.", () => {
        let difficulty: string = "1";
        game = new Game(difficulty, playerOne, playerTwo);

        expect(game.numberOfWords).toEqual(3);
    });

    test("If game is set to normal, the number of words for the game should be 3.", () => {
        let difficulty: string = "2";
        game = new Game(difficulty, playerOne, playerTwo);

        expect(game.numberOfWords).toEqual(5);
    });

    test("If game is set to hard, the number of words for the game should be 3.", () => {
        let difficulty: string = "3";
        game = new Game(difficulty, playerOne, playerTwo);

        expect(game.numberOfWords).toEqual(7);
    });
});

test("If current player is two, current player will be changed to one.", () => {
    let difficulty: string = "1";
    game = new Game(difficulty, playerOne, playerTwo);

    expect(game.currentPlayer === game.playerTwo);
});

test("If current player is one, current player will be changed to two.", () => {
    let difficulty: string = "1";
    game = new Game(difficulty, playerOne, playerTwo);

    game.getOpponent();

    expect(game.currentPlayer === game.playerTwo);
});
