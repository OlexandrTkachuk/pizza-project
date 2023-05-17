//redux
import { useSelector } from 'react-redux';
import {
  selectCategoryId,
  selectPizzas,
  selectIsLoading,
  selectFilter,
} from 'redux/slices/selectors';

// components
import MagicItem from 'components/MagicItem/MagicItem';
import Skeleton from 'components/Skeleton/Skeleto';

// constants
import { categoryOptions } from 'constants/categoryOptions';

// styles
import { PizzaTitle, PizzaGallery, NotFoundGif } from './PizzaList.styled';

// images
import notfound from '../../assets/notfoundgif.gif';

const PizzaList = () => {
  const categoryId = useSelector(selectCategoryId);
  const items = useSelector(selectPizzas);
  const allItems = useSelector(state => state.pizzas.allItems);
  const isLoading = useSelector(selectIsLoading);
  const searchValue = useSelector(selectFilter);

  const normalizeValue = searchValue.toLowerCase();
  const filteredItems = allItems.filter(item =>
    item.title.toLowerCase().includes(normalizeValue)
  );

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const isFilter = searchValue === '' ? items : filteredItems;

  const pizzas = isFilter.map(item => <MagicItem item={item} key={item.id} />);

  return (
    <>
      <PizzaTitle>{categoryOptions[categoryId]}</PizzaTitle>

      <PizzaGallery>{isLoading ? skeletons : pizzas}</PizzaGallery>

      {filteredItems.length === 0 && (
        <NotFoundGif src={notfound} alt="not found" />
      )}
    </>
  );
};

export default PizzaList;
