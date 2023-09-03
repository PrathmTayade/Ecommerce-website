import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: 1,
    amount: 0,
    total: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (cartItem) {
        cartItem.quantity += 1;
        return;
      } else {
        state.items.push(action.payload);
      }
      state.total = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((items) => items.id !== action.payload);
    },
    increase: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      cartItem.quantity += 1;

      state.total = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    decrease: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);

      if (cartItem.quantity <= 1) {
        return;
      }
      cartItem.quantity -= 1;

      state.total = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.items.forEach((item) => {
        amount = item.quantity * item.price;
        total += amount;
      });
      state.total = total;
    },
  },
});

// console.log(cartSlice);
export const cartSelector = (state) => state.cart;
export const { addToCart, removeFromCart, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
