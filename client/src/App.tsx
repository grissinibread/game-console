import './App.css'
import FrontPage from './pages/FrontPage.tsx';
import DifficultySelectionPage from './pages/DifficultySelectionPage.tsx';
import WordInputPage from './pages/WordInputPage.tsx';
import WordGuessPage from './pages/WordGuessPage.tsx';
import {Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path='/' element={<FrontPage />}/>
      <Route path='/difficulty' element={<DifficultySelectionPage />}/>
      <Route path='/wordInput' element={<WordInputPage />}/>
      <Route path='/wordGuess' element={<WordGuessPage />}/>
    </Routes>
  );
}

export default App
