import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas, fetchPizzasByCategory } from './pizzas-operations';

const initialState = {
  items: [],
  allItems: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  extraReducers: builder => {
    builder
      // fetch pizzas by page
      .addCase(fetchPizzas.pending, handlePending)
      .addCase(fetchPizzas.rejected, handleRejected)
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      // fetch all items
      .addCase(fetchPizzasByCategory.pending, handlePending)
      .addCase(fetchPizzasByCategory.rejected, handleRejected)
      .addCase(fetchPizzasByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allItems = action.payload;
        state.error = null;
      });
  },
});

export const pizzasReducer = pizzasSlice.reducer;
