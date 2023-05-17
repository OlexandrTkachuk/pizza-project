// system
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QueryString from 'qs';

// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCategoryId,
  selectSortType,
  selectPage,
  // selectFilter,
} from 'redux/slices/selectors';
import {
  fetchPizzas,
  fetchPizzasByCategory,
} from 'redux/slices/pizzas-operations';

// components
import Homebar from 'components/HomeBar/HomeBar';
// import PizzaList from 'components/PizzaList/PizzaList';
// import Pagination from 'components/Pagination/Pagination';
import MagicItem from 'components/MagicItem/MagicItem';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryId = useSelector(selectCategoryId);
  const sortType = useSelector(selectSortType);
  const page = useSelector(selectPage);
  // const searchValue = useSelector(selectFilter);

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

  useEffect(() => {
    const queryString = QueryString.stringify({
      page,
      categoryId,
      sort: sortType.value,
    });

    navigate(`?${queryString}`);
  }, [categoryId, navigate, page, sortType]);

  return (
    <>
      <Homebar />

      {/* <PizzaList />

      {!searchValue && <Pagination />} */}

      <MagicItem />
    </>
  );
};

export default Home;
