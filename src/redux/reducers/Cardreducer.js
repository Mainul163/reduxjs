import { ADD_TO_CART, GET, REMOVE_FROM_CART } from "../actions/cardAcctions";

const initialState = {
  cart: [],
  product: [
    { name: "lanevo", id: 1 },
    { name: "Dell", id: 2 },
    { name: "Hp", id: 3 },
    { name: "Asus", id: 4 },
    { name: "Tosheiba", id: 5 },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("action", action);
      const newId = action.id;
      const newIteam = {
        productId: action.id,
        name: action.productName,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newIteam];

      return { ...state, cart: newCart };

    case REMOVE_FROM_CART:
      const removeId = action.id;
      const remainingCart = state.cart.filter(
        (iteam) => iteam.cartId !== removeId
      );
      return { ...state, cart: remainingCart };

    // case GET:
    //   return {
    //     ...state,
    //     product: [
    //       { name: "lanevo", id: 1 },
    //       { name: "Dell", id: 2 },
    //       { name: "Hp", id: 3 },
    //       { name: "Asus", id: 4 },
    //       { name: "Tosheiba", id: 5 },
    //     ],
    //   };
    default:
      return state;
  }
};

export default cartReducer;
