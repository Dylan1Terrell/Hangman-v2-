import React from "react";

const StatusDisplay = ({ status, wrongGuesses, word }) => {
  if (status === "playing") return <div>Wrong Guesses: {wrongGuesses}</div>;
  if (status === "won") return <div className="text-green-600 font-bold">You won!</div>;
  return <div className="text-red-600 font-bold">You lost. The word was "{word}"</div>;
};

export default StatusDisplay;
