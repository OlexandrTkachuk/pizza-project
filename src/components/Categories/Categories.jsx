// styles
import { CategoryList, CategoryButton } from './Categories.styled';

const options = [
  'Всі',
  'Самий ТОП',
  "М'ясні",
  'Вегетаріанські',
  'Гострі',
  'Спецпропозиції',
];

const Categories = ({ categoryId, onCategoryClick, clearPage }) => {
  return (
    <CategoryList>
      {options.map((option, index) => (
        <li key={index}>
          <CategoryButton
            onClick={() => {
              onCategoryClick(index);
              clearPage();
            }}
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
