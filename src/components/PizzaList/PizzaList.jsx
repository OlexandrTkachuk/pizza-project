// system
import { useState, useEffect } from 'react';

// components
import PizzaItem from 'components/PizzaItem/PizzaItem';
import Skeleton from 'components/Skeleton/Skeleto';

// styles
import { PizzaTitle, PizzaGallery } from './PizzaList.styled';

const PizzaList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://645604705f9a4f236138e078.mockapi.io/items')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <PizzaTitle>Всі піци</PizzaTitle>

      <PizzaGallery>
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : items.map(item => <PizzaItem item={item} key={item.id} />)}
      </PizzaGallery>
    </>
  );
};

export default PizzaList;
