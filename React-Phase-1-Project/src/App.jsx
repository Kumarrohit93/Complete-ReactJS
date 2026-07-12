import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import products from "./Data";
import ProductsList from "./Components/ProductsList";
import ProductCard from "./Components/ProductCard";

const App = () => {
  const [search, setSearch] = useState("");
  const allProducts = products.filter((pro) =>
    pro.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} />
      <ProductsList products={allProducts} />
    </div>
  );
};

export default App;
