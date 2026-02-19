export class Player {
    private hintWord: string = "";
    private words: string[] = [];
    wordsGuessed: number = 0;

    getHintWord() {
        return this.hintWord;
    }

    getWords() {
        return this.words;
    }

    setHintWord(hintWord: string) {
        this.hintWord = hintWord;
    }

    addWord(word: string) {
        this.words.push(word);
    }
}