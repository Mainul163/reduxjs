export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET = "GET";
export const addToCart = (id, productName) => {
  return { type: ADD_TO_CART, id, productName };
};

export const removeFromCart = (id) => {
  return { type: REMOVE_FROM_CART, id };
};
export const addget = () => {
  return { type: GET };
};
