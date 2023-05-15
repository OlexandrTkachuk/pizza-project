import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas } from './pizzas-operations';

const initialState = {
  items: [],
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
      // fetch pizzas
      .addCase(fetchPizzas.pending, handlePending)
      .addCase(fetchPizzas.rejected, handleRejected)
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      });
  },
});

export const pizzasReducer = pizzasSlice.reducer;
