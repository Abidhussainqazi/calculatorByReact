import React, { useState } from 'react';
import '../cal/Calculator.css'; // Import the CSS file
import Display from '../cal/Display';
import Button from '../cal/Button';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="button-container">
        <Button  onClick={handleButtonClick}>7</Button>
        <Button onClick={handleButtonClick}>8</Button>
        <Button onClick={handleButtonClick}>9</Button>
        <div className="op">
        <Button onClick={handleButtonClick}>/</Button>
        </div>
        <Button onClick={handleButtonClick}>4</Button>
        <Button onClick={handleButtonClick}>5</Button>
        <Button onClick={handleButtonClick}>6</Button>
        <div className="op">
        <Button onClick={handleButtonClick}>*</Button>
        </div>
        <Button onClick={handleButtonClick}>1</Button>
        <Button onClick={handleButtonClick}>2</Button>
        <Button onClick={handleButtonClick}>3</Button>
        <div className="op">
        <Button onClick={handleButtonClick}>+</Button>
        </div>
        <Button onClick={handleButtonClick}>0</Button>
        <Button onClick={handleButtonClick}>.</Button>
        <div className="op">
        <Button onClick={handleButtonClick}>-</Button>
        </div>
        <div id="eq">
        
      <Button onClick={handleCalculate}>=</Button>
      </div>
        <div id="c">
        <Button onClick={handleClear} id='c'>C</Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
