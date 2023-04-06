import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      { id:"sadjias",  title: "prod 1", image: "image1", quantity: 1, price: 100 },
      {id:"dsaodsad", title: "prod 2", image: "image2", quantity: 2, price: 100 },
    ],
    quantity: 1,
    amount: 0,
    total: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (items) => items.title !== action.payload.title
      );
    },
    increase: (state, { payload }) => {
      const cartItem = state.items.find((item) => item.id === payload.id);
      cartItem.quantity += 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.items.find((item) => item.id === payload.id);
      cartItem.quantity -= 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.items.forEach((item) => {
        amount += item.amount;
        total = item.quantity * item.price;
      });
      state.total = total;
    },
  },
});

// console.log(cartSlice);
export const cartSelector = (state) => state.cart;
export const { addToCart, removeFromCart, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
