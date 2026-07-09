import React, { useState } from "react";

const ToggleTheme = () => {
  const [isDark, setDark] = useState(false);

  function darkTheme() {
    if (isDark === false) {
      setDark(true);
    } else {
      setDark(false);
    }
  }

  return (
    <div
      style={{
        backgroundColor: isDark ? "#000000" : "#ffffff",
        color: isDark ? "#ffffff" : "#000000",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>{isDark ? "Dark Theme" : "Light Theme"}</h1>
      <button onClick={darkTheme}>Toggle</button>
    </div>
  );
};

export default ToggleTheme;
