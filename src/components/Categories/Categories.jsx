// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoryId } from 'redux/slices/selectors';
import { setCategoryId, clearPage } from 'redux/slices/filterSlice';

// constants
import { categoryOptions } from 'constants/categoryOptions';

// styles
import { CategoryList, CategoryButton } from './Categories.styled';

const Categories = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(selectCategoryId);

  const handleCategory = index => {
    dispatch(setCategoryId(index));
    dispatch(clearPage());
  };

  return (
    <CategoryList>
      {categoryOptions.map((option, index) => (
        <li key={index}>
          <CategoryButton
            onClick={() => handleCategory(index)}
            className={categoryId === index ? 'active' : ''}
          >
            {option}
          </CategoryButton>
        </li>
      ))}
    </CategoryList>
  );
};

export default Categories;
