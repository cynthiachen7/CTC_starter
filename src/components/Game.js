import React, { useState } from "react";
import Square from './Square';
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  // Initializing other variables
  let winner = calculateWinner(board);
  let squareValue = 'X';
  if (!xIsNext) {
    squareValue = 'O';
  }

  const jumpToStart = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setStepNumber(0);
    setXIsNext(true);
  }

  let result = "Next Player: " + squareValue;
  if (winner) {
    result = "Winner: " + winner;
  } else if (!board.includes(null)) {
    result = "Tie Game";
  }

  const handleClick = (i) => {
    if (winner || board[i] != null) return;
    board[i] = squareValue;
    setBoard(board);
    setStepNumber(stepNumber + 1);
    setXIsNext(!xIsNext);
    
  }

  return (
    <>
    <h1 className='header'>Tic Tac Toe</h1>
    <Board squares={board} onClick={(i) => handleClick(i)}/>
    <div className='info-wrapper'>
      <div>
        <button className='button' onClick={() => jumpToStart()}>Go To Start</button>
      </div>
      <h3>{result}</h3>
    </div>
    </>
  );
};

export default Game;
