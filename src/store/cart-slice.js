import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    itemsInCart: 0,
  },
  reducers: {
    addToCart(state, action) {
      const index = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        state.cartItems[index].quantity += 1;
      }
      state.itemsInCart += 1;
    },
    increaseQuantity(state, action) {
      const index = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cartItems[index].quantity += 1;
      state.itemsInCart += 1;
    },
    decreaseQuantity(state, action) {
      const index = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.cartItems[index].quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.cartItems[index].quantity -= 1;
      }
      state.itemsInCart -= 1;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
