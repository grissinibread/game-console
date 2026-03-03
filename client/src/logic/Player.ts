export class Player {
    private hintWord: string = "";
    private words: string[] = [];
    private wordsGuessed: number = 0;

    getHintWord() {
        return this.hintWord;
    }

    getWords() {
        return this.words;
    }

    getWordsGuessed() {
        return this.wordsGuessed;
    }

    setHintWord(hintWord: string) {
        this.hintWord = hintWord;
    }

    addWord(word: string) {
        this.words.push(word);
    }

    guessedWordCorrectly() {
        this.wordsGuessed++;
    }
}