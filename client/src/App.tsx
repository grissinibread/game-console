import './App.css'

import {Routes, Route} from "react-router";

import FrontPage from './pages/FrontPage.tsx';
import DifficultySelectionPage from './pages/DifficultySelectionPage.tsx';
import WordInputPage from './pages/WordInputPage.tsx';
import WordGuessPage from './pages/WordGuessPage.tsx';

import type {GameState} from './GameState.ts';
import {Player} from './logic/Player.ts';

let gameState: GameState = {
	playerOne: new Player(),
	playerTwo: new Player(),

	game: null,
};

function App() {
	return (
		<Routes>
			<Route path='/' element={<FrontPage/>}/>
			<Route path='/difficulty' element={<DifficultySelectionPage game={gameState}/>}/>
			<Route path='/wordInput' element={<WordInputPage/>}/>
			<Route path='/wordGuess' element={<WordGuessPage/>}/>
		</Routes>
	);
}

export default App
