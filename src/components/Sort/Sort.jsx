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

const Sort = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const popupOptions = ['популярністю', 'ціною', 'алфавітом'];

  const switchSortMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleOption = index => {
    setActiveIndex(index);
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
            {popupOptions[activeIndex]}
          </SortLabelText>
        </SortTextWrapper>
      </SortLabel>

      {isMenuOpen && (
        <SortPopup>
          <SortPopupList>
            {popupOptions.map((option, index) => (
              <SortPopupItem
                key={index}
                onClick={() => handleOption(index)}
                className={activeIndex === index ? 'active' : ''}
              >
                {option}
              </SortPopupItem>
            ))}
          </SortPopupList>
        </SortPopup>
      )}
    </SortWrapper>
  );
};

export default Sort;
