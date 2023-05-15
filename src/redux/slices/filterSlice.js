import { createSlice } from '@reduxjs/toolkit';

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
    changeFilterValue: (state, action) => {
      state.filter = action.payload;
    },
    clearFilterValue: state => {
      state.filter = initialState.filter;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sort = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    clearPage: state => {
      state.page = initialState.page;
    },
    setPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
  },
});

export const {
  changeFilterValue,
  clearFilterValue,
  setCategoryId,
  setSortType,
  setPage,
  clearPage,
  setPageCount,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
