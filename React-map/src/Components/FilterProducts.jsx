import React from "react";

const FilterProducts = () => {
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

  const availableProducts = products.filter((pro) => pro.inStock)
  return (
    <div>
        <h1>Available Products: {availableProducts.length}</h1>
      {products
        .filter((pro) => pro.inStock)
        .map((pro) => (
          <div key={pro.id}>
            <h3>{pro.name}</h3>
            <p>Price: ₹{pro.price}</p>
            <p>{pro.inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default FilterProducts;
