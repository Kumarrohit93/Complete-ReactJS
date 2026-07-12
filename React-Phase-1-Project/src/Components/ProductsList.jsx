import React from "react";
import ProductCard from "./ProductCard.jsx";
import "../CSS/ProductCard.css";

const ProductsList = ({ products }) => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <h1 >Showing {products.length} Products</h1>
      <div className="product-container">
        {products.length === 0 ? (
          <h1>😕 No Products Found</h1>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsList;
