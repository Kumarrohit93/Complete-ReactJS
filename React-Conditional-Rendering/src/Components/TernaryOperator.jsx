import React from "react";

const TernaryOperator = () => {
  let age = 17;
  return (
    <div>
      {age >= 18 ? (
        <h1>Eligible for voting</h1>
      ) : (
        <h1>Not Eligible for voting</h1>
      )}
    </div>
  );
};

export default TernaryOperator;
