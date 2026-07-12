import React, { useState } from "react";
import products from "../Data.js";
import "../CSS/SearchBar.css";

const SearchBar = ({ search, setSearch }) => {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  function clearInput() {
    setSearch("")
  }
  return (
    <div className="inp-box">
      <input
        className="input-search"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search Products"
      />
      <button onClick={clearInput}>Clear</button>
    </div>
  );
};

export default SearchBar;
