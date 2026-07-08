import React from "react";

const Fruits = () => {
  const fruits = ["Apple", "Mango", "Banana", "Watermelon", "Orange"];
  return (
    <div>
      <h1>Fruits Name:</h1>
      <ul>
        {fruits.map((fruit, key) => (
          <li key={key}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
