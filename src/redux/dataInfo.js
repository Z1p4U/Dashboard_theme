import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cartItems: [],
};
const STORE_KEY = "cartItems";
const storeItems = Cookies.get(STORE_KEY);
if (storeItems) {
  initialState.cartItems = JSON.parse(storeItems);
}

export const dataInfo = createSlice({
  name: "dataInfo",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems = [...state.cartItems, payload];
      // Cookies.set(STORE_KEY, JSON.stringify(state.cartItems));
      Cookies.set(STORE_KEY, JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = dataInfo.actions;
export default dataInfo.reducer;
