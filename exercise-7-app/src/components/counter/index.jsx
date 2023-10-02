import React, { useState } from "react";
import "./App.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <div className="container2">
          <button className="button1" onClick={decrement}>-</button>
          <h1 className="angka">{count}</h1>
          <button className="button2" onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default CounterApp;
