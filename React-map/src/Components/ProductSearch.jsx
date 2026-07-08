import React from "react";

const ProductSearch = () => {
  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      price: 4999,
      inStock: true,
    },
    {
      id: 2,
      name: "Adidas Shoes",
      price: 5999,
      inStock: false,
    },
    {
      id: 3,
      name: "Puma Shoes",
      price: 3499,
      inStock: true,
    },
    {
      id: 4,
      name: "Reebok Shoes",
      price: 2999,
      inStock: false,
    },
    {
      id: 5,
      name: "Campus Shoes",
      price: 1999,
      inStock: true,
    },
    {
      id: 6,
      name: "Woodland Boots",
      price: 6999,
      inStock: true,
    },
  ];
  let search = "hoe";

  let filtered = products.filter((pro) => pro.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>All Products</h1>
      {filtered.map((pro) => (
        <div key={pro.id}>
          <h3>{pro.name}</h3>
          <p>Price: {pro.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductSearch;
