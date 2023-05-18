// system
import { useEffect, useRef, useState } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectSortType } from 'redux/slices/selectors';
import { setSortType } from 'redux/slices/filterSlice';

// constants
import { sortOptions } from 'constants/sortOptions';

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
  const dispatch = useDispatch();
  const sort = useSelector(selectSortType);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sortRef = useRef(null);

  const switchSortMenu = () => setIsMenuOpen(prev => !prev);

  const handleOption = value => {
    dispatch(setSortType(value));
    setIsMenuOpen(prev => !prev);
  };

  const handleOutsideClick = event => {
    const path = event.composedPath();

    if (!path.includes(sortRef.current)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <SortWrapper ref={sortRef}>
      <SortLabel>
        {!isMenuOpen ? (
          <SortLabelIconDown onClick={switchSortMenu} />
        ) : (
          <SortLabelIconUp onClick={switchSortMenu} />
        )}

        <SortTextWrapper>
          <SortLabelBoldText>Сотрування за:</SortLabelBoldText>
          <SortLabelText onClick={switchSortMenu}>{sort.name}</SortLabelText>
        </SortTextWrapper>
      </SortLabel>

      {isMenuOpen && (
        <SortPopup>
          <SortPopupList>
            {sortOptions.map((option, index) => (
              <SortPopupItem
                key={index}
                onClick={() => handleOption(option)}
                className={sort.name === option.name ? 'active' : ''}
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
