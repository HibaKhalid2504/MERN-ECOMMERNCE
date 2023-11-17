import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loaderSlice";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
  loader: loaderSlice,
  user: userSlice,
  product: productSlice,
  cart: cartSlice,
});

const store = configureStore({
  reducer: rootReducer,
});
const initialState = {
  products: [], // Default to an empty array
  // ... other state properties
};

export default store;
