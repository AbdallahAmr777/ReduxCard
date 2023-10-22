import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/Product-slice";
import cartSlice from "./Slices/Cart-slice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});
