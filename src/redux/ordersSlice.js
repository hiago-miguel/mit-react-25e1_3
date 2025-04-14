// src/redux/ordersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
