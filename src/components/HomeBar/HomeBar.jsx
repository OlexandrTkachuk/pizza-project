// components
import Categories from 'components/Categories/Categories';
import Sort from 'components/Sort/Sort';

// styles
import { HomeBarWrapper } from './HomeBar.styled';

const Homebar = ({
  categoryId,
  selectedSortType,
  onCategoryClick,
  onSortTypeClick,
}) => {
  return (
    <HomeBarWrapper>
      <Categories categoryId={categoryId} onCategoryClick={onCategoryClick} />
      <Sort
        selectedSortType={selectedSortType}
        onSortTypeClick={onSortTypeClick}
      />
    </HomeBarWrapper>
  );
};

export default Homebar;
