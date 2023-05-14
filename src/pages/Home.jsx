// system
import { useState, useEffect } from 'react';

// components
import Homebar from 'components/HomeBar/HomeBar';
import PizzaList from 'components/PizzaList/PizzaList';
import Pagination from 'components/Pagination/Pagination';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [selectedSortType, setSelectedSortType] = useState({
    name: 'популярності',
    value: 'rating',
  });

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(`https://645604705f9a4f236138e078.mockapi.io/items?${category}`)
      .then(res => res.json())
      .then(data => setPageCount(Math.ceil(data.length / 6)));
  }, [categoryId]);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = selectedSortType.value.includes('-') ? 'desc' : 'asc';
    const sortBy = selectedSortType.value.replace('-', '');
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://645604705f9a4f236138e078.mockapi.io/items?page=${page}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setIsLoading(false);
      })
      .catch(error => {
        throw new Error(error);
      });
  }, [categoryId, page, searchValue, selectedSortType]);

  const handleCategoryChange = id => setCategoryId(id);
  const handleSortTypeChange = value => setSelectedSortType(value);
  const handlePage = index => {
    setPage(index + 1);
    window.scrollTo(0, 0);
  };

  // local filter logic
  // const normalizeSearchValue = searchValue.toLowerCase();
  // const filteredItems = items.filter(item =>
  //   item.title.toLowerCase().includes(normalizeSearchValue)
  // );

  return (
    <>
      <Homebar
        categoryId={categoryId}
        onCategoryClick={handleCategoryChange}
        selectedSortType={selectedSortType}
        onSortTypeClick={handleSortTypeChange}
      />

      <PizzaList items={items} isLoading={isLoading} categoryId={categoryId} />

      <Pagination onPage={handlePage} pageCount={pageCount} />
    </>
  );
};

export default Home;
