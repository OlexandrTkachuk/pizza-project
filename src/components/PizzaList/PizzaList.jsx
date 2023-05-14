// components
import PizzaItem from 'components/PizzaItem/PizzaItem';
import Skeleton from 'components/Skeleton/Skeleto';

// styles
import { PizzaTitle, PizzaGallery } from './PizzaList.styled';

const options = [
  'Всі',
  'Самий ТОП',
  "М'ясні",
  'Вегетаріанські',
  'Гострі',
  'Спецпропозиції',
];

const PizzaList = ({ items, isLoading, categoryId }) => {
  const pizzas = items.map(item => <PizzaItem item={item} key={item.id} />);

  const skeletons = [...new Array(10)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <PizzaTitle>{options[categoryId]}</PizzaTitle>

      <PizzaGallery>{isLoading ? skeletons : pizzas}</PizzaGallery>
    </>
  );
};

export default PizzaList;
