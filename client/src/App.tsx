import { Routes, Route } from "react-router";

import FrontPage from "./pages/FrontPage.tsx";
import DifficultySelectionPage from "./pages/DifficultySelectionPage.tsx";
import WordInputPage from "./pages/WordInputPage.tsx";
import WordGuessPage from "./pages/WordGuessPage.tsx";
import { useState } from "react";

function App() {
  const [server, setServer] = useState<WebSocket | null>(null);

  return (
    <Routes>
      <Route path="/" element={<FrontPage setServer={setServer}/>} />
      <Route path="/difficulty" element={<DifficultySelectionPage server={server}/>} />
      <Route path="/wordInput" element={<WordInputPage server={server}/>} />
      <Route path="/wordGuess" element={<WordGuessPage server={server}/>} />
    </Routes>
  );
}

export default App;
