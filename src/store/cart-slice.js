import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
    cartItems: [],
  },
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state, action) {
      const index = state.cartItems.findIndex(
        (product) => product.title === action.payload.title
      );
      if (index === -1) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        state.cartItems[index].quantity += 1;
      }
    },
    increaseQuantity(state, action) {
      const index = state.cartItems.findIndex(
        (prodcut) => prodcut.title === action.payload.title
      );
      state.cartItems[index].quantity += 1;
    },
    decreaseQuantity(state, action) {
      const index = state.cartItems.findIndex(
        (product) => product.title === action.payload.title
      );
      if (state.cartItems[index].quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.title !== action.payload.title
        );
      } else {
        state.cartItems[index].quantity -= 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
