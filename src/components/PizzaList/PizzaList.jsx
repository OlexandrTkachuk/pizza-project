//redux
import { useSelector } from 'react-redux';
import { selectCategoryId, selectPizzas } from 'redux/slices/selectors';

// components
import PizzaItem from 'components/PizzaItem/PizzaItem';
import Skeleton from 'components/Skeleton/Skeleto';

import { categoryOptions } from 'constants/categoryOptions';

// styles
import { PizzaTitle, PizzaGallery } from './PizzaList.styled';

const PizzaList = ({ isLoading }) => {
  const categoryId = useSelector(selectCategoryId);
  const items = useSelector(selectPizzas);

  const pizzas = items.map(item => <PizzaItem item={item} key={item.id} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <PizzaTitle>{categoryOptions[categoryId]}</PizzaTitle>

      <PizzaGallery>{isLoading ? skeletons : pizzas}</PizzaGallery>
    </>
  );
};

export default PizzaList;
