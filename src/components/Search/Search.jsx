// redux
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterValue, setPage } from 'redux/slices/filterSlice';
import { selectFilter } from 'redux/slices/selectors';

// styles
import { CloseIcon, Input, SearchIcon, SearchWrapper } from './Search.styled';

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const inputValue = useSelector(selectFilter);

  const handleChange = event => {
    const value = event.target.value;
    dispatch(changeFilterValue(value));
    dispatch(setPage(1));
  };

  const handleClearClick = () => {
    dispatch(changeFilterValue(''));
    setPage(1);
    inputRef.current.focus();
  };

  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder="Введіть назву піци"
        onChange={handleChange}
        value={inputValue}
        autoComplete="on"
        ref={inputRef}
        name="search"
      />
      {inputValue !== '' && (
        <CloseIcon onClick={handleClearClick} primary={inputValue} />
      )}
      <SearchIcon />
    </SearchWrapper>
  );
};

export default Search;
