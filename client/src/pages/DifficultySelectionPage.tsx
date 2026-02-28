function DifficultySelectionPage() {
  return (
    <>
      <h2>Select Difficulty</h2>

      <div className="stack">
        <input id="easy" type="radio" name="difficulty"/>
        <label htmlFor="easy">Easy</label>

        <input id="normal" type="radio" name="difficulty"/>
        <label htmlFor="normal">Normal</label>

        <input id="hard" type="radio" name="difficulty"/>
        <label htmlFor="hard">Hard</label>
      </div> 

      <input id="createGameButton" type="button"/>
      <label htmlFor="createGameButton">Create Game</label>
    </>
  );
}

export default DifficultySelectionPage;

let button = document.getElementById("createGameButton");
let clickRadioButton = document.getElementsByName("difficulty");
