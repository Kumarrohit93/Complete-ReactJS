import React from "react";

const MiniProject = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 16",
      price: 80000,
      category: "Mobile",
      inStock: true,
    },
    {
      id: 2,
      name: "Samsung S25",
      price: 75000,
      category: "Mobile",
      inStock: false,
    },
    {
      id: 3,
      name: "MacBook Air",
      price: 95000,
      category: "Laptop",
      inStock: true,
    },
    {
      id: 4,
      name: "HP Victus",
      price: 65000,
      category: "Laptop",
      inStock: true,
    },
    {
      id: 5,
      name: "Boat Headphones",
      price: 2500,
      category: "Accessories",
      inStock: false,
    },
    {
      id: 6,
      name: "Logitech Mouse",
      price: 1200,
      category: "Accessories",
      inStock: true,
    },
  ];

  let search = "book"
  return (
    <div>
        <h1>Tech Store</h1>
        {products.filter((pro) => pro.inStock && pro.name.toLowerCase().includes(search)).map((pro) => (
            <div key={pro.id}>
                <h1>{pro.name}</h1><span style={{background: "orange"}}>{pro.price > 50000 ? "🔥 Premium Product" : "⭐ Budget Friendly"}</span>
                <p><b>Category:</b> {pro.category}</p>
                <p><b>Price: </b>₹{pro.price}</p>
                <p>{pro.inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
            </div>
        ))}
    </div>
  );
};

export default MiniProject;
