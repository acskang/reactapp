import React from "react";

const Letter = ({ value, isShown }) => {
  let output = " ";
  if (isShown) {
    output = value;
  }
  return (
    <div>
      <span className="letter">{output}</span>
    </div>
  );
};

export default Letter;
