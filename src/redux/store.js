import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filterSlice';
import { pizzasReducer } from './slices/pizzasSlice';
import { cartItemsReducer } from './slices/cartItemsSlice';

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    filter: filterReducer,
    pizzas: pizzasReducer,
  },
});
