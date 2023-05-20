import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const findItem = state.cartItems.find(
        item => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );

      state.totalCount = state.cartItems.reduce(
        (acc, item) => acc + item.count,
        0
      );
    },
    deleteCartItem: (state, action) => {
      const index = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );

      state.cartItems.splice(index, 1);
    },
    clearCart: state => {
      state.cartItems = initialState.cartItems;
    },
    countIncrement: (state, action) => {
      const findItem = state.cartItems.find(item => item.id === action.payload);

      if (findItem) {
        findItem.count += 1;
      }

      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );

      state.totalCount = state.cartItems.reduce(
        (acc, item) => acc + item.count,
        0
      );
    },
    countDecrement: (state, action) => {
      const findItem = state.cartItems.find(item => item.id === action.payload);

      if (findItem) {
        findItem.count -= 1;
      }

      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );

      state.totalCount = state.cartItems.reduce(
        (acc, item) => acc + item.count,
        0
      );
    },
  },
});

export const {
  addCartItem,
  deleteCartItem,
  clearCart,
  countIncrement,
  countDecrement,
} = cartItemsSlice.actions;

export const cartItemsReducer = cartItemsSlice.reducer;
