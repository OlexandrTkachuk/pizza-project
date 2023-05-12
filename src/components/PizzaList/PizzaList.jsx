// components
import PizzaItem from 'components/PizzaItem/PizzaItem';
import Skeleton from 'components/Skeleton/Skeleto';

// styles
import { PizzaTitle, PizzaGallery } from './PizzaList.styled';

const PizzaList = ({ items, isLoading }) => {
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
