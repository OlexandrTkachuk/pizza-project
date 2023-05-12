// styles
import { CategoryList, CategoryButton } from './Categories.styled';

const options = [
  'Всі',
  "М'ясні",
  'Вегетаріанські',
  'Гриль',
  'Гострі',
  'Закриті',
];

const Categories = ({ categoryId, onCategoryClick }) => {
  return (
    <CategoryList>
      {options.map((option, index) => (
        <li key={index}>
          <CategoryButton
            onClick={() => onCategoryClick(index)}
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
