import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");
  
  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display));
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div>
      <input type="text" value={display} readOnly />
      <div>
        <button onClick={() => handleClick("1")}>1</button>
        {/* Agrega botones para otros números y operadores */}
        <button onClick={clearDisplay}>C</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
