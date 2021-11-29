/* eslint-disable */

import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/easyweb/game-board";

const App = () => {
  return (
    <div className="container">
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play game?</p>
      <div>
        <GameBoard secretWord="React" />
      </div>
    </div>
  );
};

export default App;
