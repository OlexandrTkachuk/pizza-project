import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filterSlice';
import { pizzasReducer } from './slices/pizzasSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    pizzas: pizzasReducer,
  },
});
