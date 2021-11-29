import React from "react";
import LetterGrid from "./letter-grid";
import ButtonGrid from "./button-grid";
const GameBoard = ({ secretWord }) => {
  return (
    <div>
      <LetterGrid secretWord={secretWord} guessedLetters={["a", "r"]} />
      <ButtonGrid />
    </div>
  );
};

export default GameBoard;
