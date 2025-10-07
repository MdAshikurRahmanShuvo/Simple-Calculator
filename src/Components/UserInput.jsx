import React, { useState } from "react";

import "../App.css"

export const UserInput = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let res = 0;
    if (operator === "+") {
      res = num1 + num2;
    } else if (operator === "-") {
      res = num1 - num2;
    } else if (operator === "*") {
      res = num1 * num2;
    } else if (operator === "/") {
      res = num1 / num2;
    } else if (operator === "%") {
      res = num1 % num2;
    }

    setResult(res);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number1") {
      setNumber1(value);
    } else if (name === "number2") {
      setNumber2(value);
    } else {
      setOperator(value);
    }
  };
  console.log(8 + 9);
  return (
    <div className="container">
      <div className="left">
        <h2>Simple Calculator</h2>
        <form action="" onSubmit={handleClick}>
          <label htmlFor="number1">First Number : </label>
          <input
            type="number"
            name="number1"
            id="number1"
            value={number1}
            required
            onChange={handleChange}
          />{" "}
          <br />
          <label htmlFor="operator"> + , - , * , / : </label>
          <input
            type="text"
            name="operator"
            id="operator"
            value={operator}
            required
            onChange={handleChange}
          />{" "}
          <br />
          <label htmlFor="number2">Second Number : </label>
          <input
            type="number"
            name="number2"
            id="number2"
            value={number2}
            required
            onChange={handleChange}
          />{" "}
          <br />
          <button>Answer</button>
        </form>
      </div>
      <div className="right">
        <h3>Result is : {result}</h3>
      </div>
    </div>
  );
};
