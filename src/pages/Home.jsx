// system
import { useState, useEffect } from 'react';

// components
import Homebar from 'components/HomeBar/HomeBar';
import PizzaList from 'components/PizzaList/PizzaList';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState(0);
  const [selectedSortType, setSelectedSortType] = useState({
    name: 'популярності',
    value: 'rating',
  });

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = selectedSortType.value.includes('-') ? 'desc' : 'asc';
    const sort = `sortBy=${selectedSortType.value}&order=${order}`;

    fetch(
      `https://645604705f9a4f236138e078.mockapi.io/items?${category}&${sort}`
    )
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setIsLoading(false);
      })
      .catch(error => {
        throw new Error(error);
      });
  }, [categoryId, selectedSortType]);

  const handleCategoryChange = id => setCategoryId(id);
  const handleSortTypeChange = value => setSelectedSortType(value);

  return (
    <>
      <Homebar
        categoryId={categoryId}
        onCategoryClick={handleCategoryChange}
        selectedSortType={selectedSortType}
        onSortTypeClick={handleSortTypeChange}
      />

      <PizzaList items={items} isLoading={isLoading} />
    </>
  );
};

export default Home;
