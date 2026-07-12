import React from "react";
import "../CSS/ProductCard.css";
const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <header className="product-card__header">
        <h2 className="product-card__title">{product.name}</h2>
        <p className="product-card__category">{product.category}</p>
      </header>
      <div className="product-card__body">
        {product.inStock == true ? <p>🟢 In Stock</p> : ""}
        <p className="product-card__price">₹{product.price}</p>
      </div>
      <footer className="product-card__footer">
        {product.inStock == false ? (
          <h2>🔴 Out of Stock</h2>
        ) : (
          <button className="product-card__button">Buy Now</button>
        )}
      </footer>
    </article>
  );
};

export default ProductCard;
