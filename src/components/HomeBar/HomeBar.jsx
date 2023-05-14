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
  clearPage,
}) => {
  return (
    <HomeBarWrapper>
      <Categories
        categoryId={categoryId}
        onCategoryClick={onCategoryClick}
        clearPage={clearPage}
      />
      <Sort
        selectedSortType={selectedSortType}
        onSortTypeClick={onSortTypeClick}
      />
    </HomeBarWrapper>
  );
};

export default Homebar;
