import React from "react";

const PassFailTernary = ({marks}) => {
  return (
    <div>
      {marks >= 80 ? (
        <h1>Excellent</h1>
      ) : marks >= 60 ? (
        <h1>Pass</h1>
      ) : (
        <h1>Fail</h1>
      )}
    </div>
  );
};

export default PassFailTernary;
