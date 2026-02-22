import {Game, GameDifficulty} from "./Game.ts";
import {Player} from "./Player.ts";

let game: Game;

jest.mock("./Player.ts");

beforeEach(() => {
    jest.resetAllMocks();
});

describe("Player", () => {
    jest.mock("./Player.ts");

    test("", () => {
        let difficulty: GameDifficulty = "EASY";
        game = new Game(difficulty);

        expect(Player).toHaveBeenCalledTimes(2);
    });
});

describe("Game difficulty tests.", () => {
    test("If game is set to easy, the number of words for the game should be 3.", () => {
        let difficulty: GameDifficulty = "EASY";
        game = new Game(difficulty);

        expect(game.numberOfWords).toEqual(3);
    });

    test("If game is set to normal, the number of words for the game should be 3.", () => {
        let difficulty: GameDifficulty = "NORMAL";
        game = new Game(difficulty);

        expect(game.numberOfWords).toEqual(5);
    });

    test("If game is set to hard, the number of words for the game should be 3.", () => {
        let difficulty: GameDifficulty = "HARD";
        game = new Game(difficulty);

        expect(game.numberOfWords).toEqual(7);
    });
});

test("If current player is two, current player will be changed to one.", () => {
    let difficulty: GameDifficulty = "EASY";
    game = new Game(difficulty);

    expect(game.currentPlayer === game.playerTwo);
});

test("If current player is one, current player will be changed to two.", () => {
    let difficulty: GameDifficulty = "EASY";
    game = new Game(difficulty);

    game.swapTurn();

    expect(game.currentPlayer === game.playerTwo);
});