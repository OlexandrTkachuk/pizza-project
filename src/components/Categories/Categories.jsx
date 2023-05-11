// system
import { useState } from 'react';

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

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = index => setActiveIndex(index);

  return (
    <CategoryList>
      {options.map((option, index) => (
        <li key={index}>
          <CategoryButton
            onClick={() => handleActiveIndex(index)}
            className={activeIndex === index ? 'active' : ''}
          >
            {option}
          </CategoryButton>
        </li>
      ))}
    </CategoryList>
  );
};

export default Categories;
