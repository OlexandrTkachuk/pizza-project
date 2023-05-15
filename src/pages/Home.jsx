// system
import { useEffect } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCategoryId,
  selectFilter,
  selectSortType,
  selectPage,
} from 'redux/slices/selectors';

// components
import Homebar from 'components/HomeBar/HomeBar';
import PizzaList from 'components/PizzaList/PizzaList';
import Pagination from 'components/Pagination/Pagination';
import {
  fetchPizzas,
  fetchPizzasByCategory,
} from 'redux/slices/pizzas-operations';

const Home = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector(selectFilter);
  const categoryId = useSelector(selectCategoryId);
  const sortType = useSelector(selectSortType);
  const page = useSelector(selectPage);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    dispatch(fetchPizzasByCategory(category));
  }, [categoryId, dispatch]);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.value.includes('-') ? 'order=desc' : 'order=asc';
    const sortBy = sortType.value.replace('-', '');
    const search = searchValue ? `search=${searchValue}` : '';

    dispatch(fetchPizzas({ category, page, order, sortBy, search }));
  }, [categoryId, dispatch, page, searchValue, sortType]);

  return (
    <>
      <Homebar />

      <PizzaList />

      <Pagination />
    </>
  );
};

export default Home;
