import { createSlice } from '@reduxjs/toolkit';

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    deleteCartItem: (state, action) => {
      const index = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );

      state.cartItems.splice(index, 1);
    },
  },
});

export const { addCartItem, deleteCartItem } = cartItemsSlice.actions;

export const cartItemsReducer = cartItemsSlice.reducer;
