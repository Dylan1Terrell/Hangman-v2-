import React from "react";

const HangmanWord = ({ word, guessedLetters }) => {
  return (
    <div className="text-2xl mb-4">
      {word.split('').map((letter, idx) => (
        <span key={idx} className="inline-block w-6">
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;

// File: frontend/src/components/Keyboard.js
import React from "react";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard = ({ onGuess, guessedLetters }) => (
  <div className="grid grid-cols-7 gap-1 mb-4">
    {letters.map((letter) => (
      <button
        key={letter}
        onClick={() => onGuess(letter)}
        disabled={guessedLetters.includes(letter)}
        className="bg-blue-300 p-2 rounded disabled:opacity-50"
      >
        {letter}
      </button>
    ))}
  </div>
);

export default Keyboard;
