import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      state.total += item.price * item.quantity;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if (existingItem) {
        state.total -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((i) => i.id !== id);
      }
    },
    increase: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      cartItem.quantity += 1;
      state.total += cartItem.price;
    },
    decrease: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      if (cartItem.quantity <= 1) {
        return;
      }
      cartItem.quantity -= 1;
      state.total -= cartItem.price;
    },
  },
});

export const cartSelector = (state) => state.cart;
export const { addItem, decrease, increase, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
