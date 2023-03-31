
// of no use

import { createSlice } from "@reduxjs/toolkit";

export const quantitySlice = createSlice({
  name: "quantity",
  initialState: {
    quantity: 1,
  },
  reducers: {
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      if (state.quantity <= 1) {
        return;
      }
      state.quantity -= 1;
    },
  },
});

export const { increment, decrement } = quantitySlice.actions;
export default quantitySlice.reducer;
