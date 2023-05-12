// components
import PizzaItem from 'components/PizzaItem/PizzaItem';
import Skeleton from 'components/Skeleton/Skeleto';

// styles
import { PizzaTitle, PizzaGallery } from './PizzaList.styled';

const options = [
  'Всі',
  "М'ясні",
  'Вегетаріанські',
  'Гриль',
  'Гострі',
  'Закриті',
];

const PizzaList = ({ items, isLoading, categoryId }) => {
  return (
    <>
      <PizzaTitle>{options[categoryId]} піци</PizzaTitle>

      <PizzaGallery>
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : items.map(item => <PizzaItem item={item} key={item.id} />)}
      </PizzaGallery>
    </>
  );
};

export default PizzaList;
