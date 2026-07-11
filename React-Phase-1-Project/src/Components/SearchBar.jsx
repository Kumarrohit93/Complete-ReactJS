import React, { useState } from "react";
import products from "../Data.js";
const SearchBar = () => {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search Products"
      />

      {products
        .filter((pro) => pro.inStock && pro.name.toLowerCase().includes(search.toLowerCase()))
        .map((pro) => (
          <div key={pro.id}>
            <h1>{pro.name}</h1>
            <p>
              <b>Category:</b> {pro.category}
            </p>
            <p>
              <b>Price: </b>₹{pro.price}
            </p>
            <button>Buy Now</button>
          </div>
        ))}
    </div>
  );
};

export default SearchBar;
