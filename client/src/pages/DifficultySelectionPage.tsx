import { useState } from 'react';

import { Game } from '../logic/Game';
import { Player } from '../logic/Player';

let socket: WebSocket;

function DifficultySelectionPage( game: Game, playerOne: Player, playerTwo: Player ) {
  const [difficulty, enable] = useState<string | null>(null);

  function setDifficulty(difficulty: string) {
    enable(difficulty);

    game = new Game(difficulty, playerOne, playerTwo);
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

      <input id="createGameButton" type="button" disabled={!difficulty} onClick={ async() => {
        socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () => {
          console.log('Conected!');
          
          socket.send('hello');
        };

        socket.onmessage = ({data}) => {
          console.log('Message from server', data);
        };

      }}/>
      <label htmlFor="createGameButton">Create Game</label>
    </>
  );
}

export default DifficultySelectionPage;
