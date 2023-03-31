const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "@/reducers/cartSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
}

const store = makeStore();
export default store;
