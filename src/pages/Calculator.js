import React, { useState } from "react";
import classes from "./Calculator.module.css";

const Calculator = () => {
  const [result, setResult] = useState("");
  const [disable, setDisable] = useState(false);

  const insertDigitHandler = (e) => {
    setResult((prevState) => (prevState += e.target.value));
  };

  const invalidInput = () => {
    setResult("Invalid finishing input");
    setDisable(true);
  };

  const showResultHandler = (e) => {
    e.preventDefault();
    if (result[result.length - 1] === "/") {
      invalidInput();
    } else if (result[result.length - 1] === "*") {
      invalidInput();
    } else if (result[result.length - 1] === "+") {
      invalidInput();
    } else if (result[result.length - 1] === "-") {
      invalidInput();
    } else {
      setResult((prevState) => eval(prevState));
    }
  };

  const cleanInputHandler = () => {
    setResult("");
    setDisable(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <form onSubmit={showResultHandler}>
          <input type="text" value={result} readOnly />
          <div>
            <input type="button" value="1" onClick={insertDigitHandler} />
            <input type="button" value="2" onClick={insertDigitHandler} />
            <input type="button" value="3" onClick={insertDigitHandler} />
            <input type="button" value="/" onClick={insertDigitHandler} />
          </div>
          <div>
            <input type="button" value="4" onClick={insertDigitHandler} />
            <input type="button" value="5" onClick={insertDigitHandler} />
            <input type="button" value="6" onClick={insertDigitHandler} />
            <input type="button" value="*" onClick={insertDigitHandler} />
          </div>
          <div>
            <input type="button" value="7" onClick={insertDigitHandler} />
            <input type="button" value="8" onClick={insertDigitHandler} />
            <input type="button" value="9" onClick={insertDigitHandler} />
            <input type="button" value="+" onClick={insertDigitHandler} />
          </div>
          <div>
            <input type="button" value="0" onClick={insertDigitHandler} />
            <input type="button" value="." onClick={insertDigitHandler} />
            <input type="button" value="C" onClick={cleanInputHandler} />
            <input type="button" value="-" onClick={insertDigitHandler} />
          </div>
          {!disable && <button>=</button>}
          {disable && <button disabled>=</button>}
        </form>
      </div>
    </div>
  );
};

export default Calculator;
