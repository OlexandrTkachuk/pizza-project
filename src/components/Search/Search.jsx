// redux
import { useRef, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilterValue } from 'redux/slices/filterSlice';
import debounce from 'lodash.debounce';

// styles
import { CloseIcon, Input, SearchIcon, SearchWrapper } from './Search.styled';

const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateFilterValue = useCallback(
    debounce(value => {
      dispatch(changeFilterValue(value));
    }, 700),
    []
  );

  const handleChange = event => {
    const value = event.target.value;
    setInputValue(value);
    updateFilterValue(value);
  };

  const handleClearClick = () => {
    setInputValue('');
    dispatch(changeFilterValue(''));
    inputRef.current.focus();
  };

  return (
    <SearchWrapper>
      <Input
        type="text"
        maxLength={12}
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
