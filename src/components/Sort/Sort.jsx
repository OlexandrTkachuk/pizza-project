// system
import { useState } from 'react';

// styles
import {
  SortWrapper,
  SortLabel,
  SortLabelBoldText,
  SortLabelText,
  SortPopup,
  SortPopupList,
  SortPopupItem,
  SortLabelIconUp,
  SortLabelIconDown,
  SortTextWrapper,
} from './Sort.styled';

const popupOptions = [
  { name: 'популярності', value: 'rating' },
  { name: 'ціні ⬇', value: '-price' },
  { name: 'ціні ⬆', value: 'price' },
  { name: 'алфавіту', value: 'title' },
];

const Sort = ({ onSortTypeClick, selectedSortType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const switchSortMenu = () => setIsMenuOpen(prev => !prev);
  const handleOption = index => {
    onSortTypeClick(index);
    setIsMenuOpen(prev => !prev);
  };

  return (
    <SortWrapper>
      <SortLabel>
        {!isMenuOpen ? (
          <SortLabelIconDown onClick={switchSortMenu} />
        ) : (
          <SortLabelIconUp onClick={switchSortMenu} />
        )}

        <SortTextWrapper>
          <SortLabelBoldText>Сотрування за:</SortLabelBoldText>
          <SortLabelText onClick={switchSortMenu}>
            {selectedSortType.name}
          </SortLabelText>
        </SortTextWrapper>
      </SortLabel>

      {isMenuOpen && (
        <SortPopup>
          <SortPopupList>
            {popupOptions.map((option, index) => (
              <SortPopupItem
                key={index}
                onClick={() => handleOption(option)}
                className={
                  selectedSortType.name === option.name ? 'active' : ''
                }
              >
                {option.name}
              </SortPopupItem>
            ))}
          </SortPopupList>
        </SortPopup>
      )}
    </SortWrapper>
  );
};

export default Sort;
