import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzasItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setPizzasItems } = pizzasSlice.actions;

export const pizzasReducer = pizzasSlice.reducer;
