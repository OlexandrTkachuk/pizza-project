import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzasByCategory } from './pizzas-operations';

const initialState = {
  filter: '',
  page: 1,
  pageCount: 1,
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
    // search value
    changeFilterValue: (state, action) => {
      state.filter = action.payload;
    },
    // category
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    // sort
    setSortType: (state, action) => {
      state.sort = action.payload;
    },
    // page
    setPage: (state, action) => {
      state.page = action.payload;
    },
    clearPage: state => {
      state.page = initialState.page;
    },
    clearHomePage: state => {
      state.categoryId = initialState.categoryId;
      state.page = initialState.page;
      state.sort = initialState.sort;
      state.filter = initialState.filter;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPizzasByCategory.fulfilled, (state, action) => {
      state.pageCount = Math.ceil(action.payload.length / 6);
    });
  },
});

export const {
  changeFilterValue,
  setCategoryId,
  setSortType,
  setPage,
  clearPage,
  setPageCount,
  clearHomePage,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
