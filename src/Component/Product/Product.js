import React from "react";

const Product = ({ products, addToCart }) => {
  return (
    <div style={{ border: "1px solid red" }}>
      <h5>Name: {products?.name}</h5>
      <button onClick={() => addToCart(products.id, products.name)}>
        Add to Card
      </button>
    </div>
  );
};

export default Product;
