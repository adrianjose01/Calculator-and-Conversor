import React, { useRef, useState } from "react";
import classes from "./Conversor.module.css";
import convert from "../helpers/convert";

const Conversor = () => {
  const inputRef = useRef();
  const currencyRef = useRef();
  const [result, setResult] = useState();

  const convertHandler = () => {
    const enteredNumber = inputRef.current.value;
    const enteredCurrency = currencyRef.current.value;

    const res = convert(enteredNumber, enteredCurrency);
    setResult(
      <p
        className={classes.result}
      >{`${enteredNumber} dominican pesos is equal to ${res.toFixed(
        2
      )}$ ${enteredCurrency}`}</p>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <span>Convert Dominican pesos to any currency</span>
        <div>
          <input type="number" min={1} ref={inputRef} />
          <select ref={currencyRef}>
            <option>USD</option>
            <option>EUR</option>
            <option>JPY</option>
            <option>GBP</option>
            <option>CHF</option>
            <option>CAD</option>
          </select>
        </div>
        <button onClick={convertHandler} className={classes.btn}>
          Convert
        </button>
        {result}
      </div>
    </div>
  );
};

export default Conversor;
