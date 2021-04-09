import React from "react";
import Square from "./Square";

const Board = ( {squares, onClick}) => (
  // TODO: Populate the board with squares
  <div className = "board">
    {squares.map((square, index) => (
      <Square value ={square} key={index} onClick={() => onClick(index)} />
    ))}
  </div>
);

export default Board;
