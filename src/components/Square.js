import React from "react";
import { isElement } from "react-dom/test-utils";


const Square = ( {value, onClick, squareContent}) => {
  return (
    <>
    <button className = "squares ${squareContent}" onClick = {onClick}> {value} </button>
    </>
  );
};

export default Square;
