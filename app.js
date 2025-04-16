import React, { useState, useEffect } from "react";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import StatusDisplay from "./components/StatusDisplay";
import axios from "axios";

const App = () => {
  const [word, setWord] = useState("react"); // example word
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");
  const [username, setUsername] = useState("student");

  useEffect(() => {
    const isWinner = word.split('').every(letter => guessedLetters.includes(letter));
    const isLoser = wrongGuesses >= 6;

    if (isWinner) {
      setGameStatus("won");
      axios.post("/api/stats", { username, result: "win" });
    }
    if (isLoser) {
      setGameStatus("lost");
      axios.post("/api/stats", { username, result: "loss" });
    }
  }, [guessedLetters, wrongGuesses]);

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || gameStatus !== "playing") return;

    setGuessedLetters([...guessedLetters, letter]);
    if (!word.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Hangman Game</h1>
      <HangmanWord word={word} guessedLetters={guessedLetters} />
      <Keyboard onGuess={handleGuess} guessedLetters={guessedLetters} />
      <StatusDisplay status={gameStatus} wrongGuesses={wrongGuesses} word={word} />
    </div>
  );
};

export default App;