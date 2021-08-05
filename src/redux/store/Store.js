import { createStore } from "redux";
import cartReducer from "../reducers/Cardreducer";

export const store = createStore(cartReducer);
