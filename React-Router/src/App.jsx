import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import BackForwardButtons from "./Components/BackForwardButtons";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard name={"Rohit Kumar"} />} />
      </Routes>
      <BackForwardButtons />
    </div>
  );
};

export default App;
