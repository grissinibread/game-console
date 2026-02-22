import { Player } from "./Player";

let player: Player;

beforeEach(() => {
    player = new Player();
})

test("The amount of words guessed should come out to 0 when player is initialized.", () => {
    expect(player.getWordsGuessed()).toBe(0);
});

test("The hint word should be an empty string when player is initialized.", () => {
    expect(player.getHintWord()).toBe("");
});

test("Should return the same hint word that is set.", () => {
    let testWord = "Bread";

    player.setHintWord(testWord);

    expect(player.getHintWord()).toBe(testWord);
});

test("An empty array of words should be returned when a player is initialized.", () => {
    expect(player.getWords()).toStrictEqual([]);
});

test("The same array placed in the player should be returned.", () => {
    let testWords = ["Grissini", "Bread"];

    for(let word of testWords) {
        player.addWord(word);
    }

    expect(player.getWords()).toStrictEqual(testWords);
});

test("If player guesses correctly, their words guessed should increment", () => {
    let currentWordsGuessed = player.getWordsGuessed();

    player.guessedWordCorrectly();

    expect(currentWordsGuessed).toEqual(player.getWordsGuessed() - 1);
});