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
  const pizzas = items.map(item => <PizzaItem item={item} key={item.id} />);

  const skeletons = [...new Array(10)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <PizzaTitle>{options[categoryId]} піци</PizzaTitle>

      <PizzaGallery>{isLoading ? skeletons : pizzas}</PizzaGallery>
    </>
  );
};

export default PizzaList;
