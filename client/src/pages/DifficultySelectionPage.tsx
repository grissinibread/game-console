import {Link} from "react-router-dom";
import {useState} from 'react';

import {Game} from '../logic/Game';
import type {GameState} from '../GameState.ts'

function DifficultySelectionPage(props: { game: GameState }) {
	const [difficulty, enable] = useState<string | null>(null);
	const {game} = props;

	function setDifficulty(difficulty: string) {
		enable(difficulty);

		game.game = new Game(difficulty, game.playerOne, game.playerTwo);
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

			<Link to="/wordInput">
				<input id="createGameButton" type="button" disabled={!difficulty} onClick={() => alert(difficulty)}/>
				<label htmlFor="createGameButton">Create Game</label>
			</Link>
		</>
	);
}

export default DifficultySelectionPage;
