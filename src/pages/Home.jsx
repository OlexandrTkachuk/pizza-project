// system
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCategoryId,
  selectSortType,
  selectPage,
  selectFilter,
} from 'redux/slices/selectors';
import {
  fetchPizzas,
  fetchPizzasByCategory,
} from 'redux/slices/pizzas-operations';
import { setFilters } from 'redux/slices/filterSlice';

// components
import Homebar from 'components/HomeBar/HomeBar';
import PizzaList from 'components/PizzaList/PizzaList';
import Pagination from 'components/Pagination/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryId = useSelector(selectCategoryId);
  const sortType = useSelector(selectSortType);
  const page = useSelector(selectPage);
  const searchValue = useSelector(selectFilter);

  useEffect(() => {
    if (window.location.search) {
      const params = queryString.parse(window.location.search.substring(1));
      console.log(params);

      dispatch(setFilters({ ...params }));
    }
  }, [dispatch]);

  useEffect(() => {
    const queryStr = queryString.stringify({
      page,
      categoryId,
    });

    navigate(`?${queryStr}`);
  }, [categoryId, navigate, page]);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.value.includes('-') ? 'order=desc' : 'order=asc';
    const sortBy = sortType.value.replace('-', '');

    dispatch(fetchPizzasByCategory({ category, order, sortBy }));
  }, [categoryId, dispatch, sortType]);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.value.includes('-') ? 'order=desc' : 'order=asc';
    const sortBy = sortType.value.replace('-', '');

    dispatch(fetchPizzas({ category, page, order, sortBy }));
  }, [categoryId, dispatch, page, sortType]);

  return (
    <>
      <Homebar />

      <PizzaList />

      {!searchValue && <Pagination />}
    </>
  );
};

export default Home;
