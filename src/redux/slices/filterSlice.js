import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
  categoryId: 0,
  sort: {
    name: 'популярності',
    value: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterValue: (state, action) => {
      state.filter = action.payload;
    },
    clearFilterValue: state => {
      state.filter = '';
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const {
  changeFilterValue,
  clearFilterValue,
  setCategoryId,
  setSortType,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
