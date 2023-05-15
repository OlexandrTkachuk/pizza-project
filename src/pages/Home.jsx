// system
import { useEffect } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCategoryId,
  selectFilter,
  selectSortType,
  selectPage,
  selectIsLoading,
} from 'redux/slices/selectors';

import { setPageCount } from 'redux/slices/filterSlice';
import { setPizzasItems } from 'redux/slices/pizzasSlice';

// components
import Homebar from 'components/HomeBar/HomeBar';
import PizzaList from 'components/PizzaList/PizzaList';
import Pagination from 'components/Pagination/Pagination';

const Home = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector(selectFilter);
  const categoryId = useSelector(selectCategoryId);
  const sortType = useSelector(selectSortType);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(`https://645604705f9a4f236138e078.mockapi.io/items?${category}&`)
      .then(res => res.json())
      .then(data => dispatch(setPageCount(Math.ceil(data.length / 6))));
  }, [categoryId, dispatch]);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.value.includes('-') ? 'order=desc' : 'order=asc';
    const sortBy = sortType.value.replace('-', '');
    const search = searchValue ? `search=${searchValue}` : '';

    fetch(
      `https://645604705f9a4f236138e078.mockapi.io/items?${category}&sortBy=${sortBy}&${order}&${search}&page=${page}&limit=6`
    )
      .then(res => res.json())
      .then(data => {
        dispatch(setPizzasItems(data));
      })
      .catch(error => {
        throw new Error(error);
      });
  }, [categoryId, dispatch, page, searchValue, sortType]);

  return (
    <>
      <Homebar />

      <PizzaList isLoading={isLoading} />

      <Pagination />
    </>
  );
};

export default Home;
