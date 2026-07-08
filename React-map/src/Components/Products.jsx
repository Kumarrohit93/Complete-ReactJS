import React from "react";

const Products = () => {
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
  ];
  return (
    <div>
      <h1>All Products</h1>
      {products.map((pro) => (
        <div key={pro.id}>
          <h3>{pro.name}</h3>
          <p>Price: ₹{pro.price}</p>
          <h1 style={{color: pro.inStock ? "black" : "gray"}}>{pro.inStock ? <p>✅ In Stock</p> : <p>❌ Out of Stock</p>}</h1>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;
