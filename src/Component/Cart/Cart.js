import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cardAcctions";

const Cart = (props) => {
  console.log(props);
  const { cart, removeFromCart } = props;
  return (
    <div>
      <h4>this is cart</h4>
      <ul>
        {cart.map((iteam) => (
          <li key={iteam.cartId}>
            {iteam.name}
            <button onClick={() => removeFromCart(iteam.cartId)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
