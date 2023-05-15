// redux
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterValue, clearFilterValue } from 'redux/slices/filterSlice';
import { selectFilter } from 'redux/slices/selectors';

// styles
import { CloseIcon, Input, SearchIcon, SearchWrapper } from './Search.styled';

const Search = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder="Введіть назву піци"
        onChange={event => dispatch(changeFilterValue(event.target.value))}
        value={filter}
        autoComplete="on"
      />
      {filter !== '' && (
        <CloseIcon
          onClick={() => dispatch(clearFilterValue())}
          primary={filter}
        />
      )}
      <SearchIcon />
    </SearchWrapper>
  );
};

export default Search;
