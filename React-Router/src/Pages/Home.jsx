import React, { useState } from "react";
import Login from "../Components/Login";

const Home = ({ count, setCount }) => {
  function increaseCount() {
    setCount(count + 1);
    setCount(count + 1);
  }
  return (
    <div>
      <h1>🏠 Home Page</h1>
      <p>
        <b>Count: {count}</b>
      </p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default Home;
