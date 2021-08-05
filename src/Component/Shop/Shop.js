import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cardAcctions";
import Product from "../Product/Product";

const Shop = (props) => {
  console.log(props);
  const { product, addToCart } = props;

  return (
    <div>
      <h2>this is shop</h2>
      {product?.map((data) => (
        <Product products={data} addToCart={addToCart}></Product>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
