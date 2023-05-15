// system
import { useState, useEffect } from 'react';

// redux
import { useSelector } from 'react-redux';
import {
  selectCategoryId,
  selectFilter,
  selectSortType,
} from 'redux/slices/selectors';

// components
import Homebar from 'components/HomeBar/HomeBar';
import PizzaList from 'components/PizzaList/PizzaList';
import Pagination from 'components/Pagination/Pagination';

const Home = () => {
  const searchValue = useSelector(selectFilter);
  const categoryId = useSelector(selectCategoryId);
  const sortType = useSelector(selectSortType);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(`https://645604705f9a4f236138e078.mockapi.io/items?${category}&`)
      .then(res => res.json())
      .then(data => setPageCount(Math.ceil(data.length / 6)));
  }, [categoryId]);

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
        setItems(data);
        setIsLoading(false);
      })
      .catch(error => {
        throw new Error(error);
      });
  }, [categoryId, page, searchValue, sortType]);

  const handlePage = index => {
    setPage(index + 1);
    window.scrollTo(0, 0);
  };

  const clearPage = () => {
    setPage(1);
  };

  return (
    <>
      <Homebar clearPage={clearPage} />

      <PizzaList items={items} isLoading={isLoading} categoryId={categoryId} />

      <Pagination onPage={handlePage} pageCount={pageCount} />
    </>
  );
};

export default Home;
