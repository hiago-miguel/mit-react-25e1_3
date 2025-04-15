import { createSlice } from '@reduxjs/toolkit';

const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const initialState = {
  items: savedCartItems, // Use saved cart items from localStorage or default to an empty array
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // Persist to localStorage whenever the cart is updated
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items)); // Persist to localStorage
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
        if (item.quantity < 1) item.quantity = 1; // Prevent quantity from going below 1
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items)); // Persist to localStorage
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify([])); // Persist an empty cart to localStorage
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
