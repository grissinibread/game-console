import { useState } from 'react';

function DifficultySelectionPage() {
  const [difficulty, enable] = useState<string | null>(null);

  function setDifficulty(difficulty: string) {
    enable(difficulty);

    return difficulty;
  }

  return (
    <>
      <h2>Select Difficulty</h2>

      <div className="stack">
        <input id="easy" type="radio" name="difficulty" onClick={() => setDifficulty("easy")}/>
        <label htmlFor="easy">Easy</label>

        <input id="normal" type="radio" name="difficulty" onClick={() => setDifficulty("normal")}/>
        <label htmlFor="normal">Normal</label>

        <input id="hard" type="radio" name="difficulty" onClick={() => setDifficulty("hard")}/>
        <label htmlFor="hard">Hard</label>
      </div> 

      <input id="createGameButton" type="button" disabled={!difficulty} onClick={() => alert(difficulty)}/>
      <label htmlFor="createGameButton">Create Game</label>
    </>
  );
}

export default DifficultySelectionPage;
