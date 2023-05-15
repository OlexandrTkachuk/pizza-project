// filter selectors
export const selectFilter = state => state.filter.filter;

// category selectors
export const selectCategoryId = state => state.filter.categoryId;

// sort type selectors
export const selectSortType = state => state.filter.sort;

// page selectors
export const selectPage = state => state.filter.page;
export const selectPageCount = state => state.filter.pageCount;

// pizza  selecotrs
export const selectPizzas = state => state.pizzas.items;
export const selectIsLoading = state => state.pizzas.isLoading;
export const selectError = state => state.pizzas.error;
