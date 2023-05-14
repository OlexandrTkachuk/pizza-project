import { useContext } from 'react';
import { CloseIcon, Input, SearchIcon, SearchWrapper } from './Search.styled';
import { SearchContext } from 'App';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleInputChange = event => {
    setSearchValue(event.target.value);
  };

  const clearInput = () => {
    setSearchValue('');
  };

  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder="Введіть назву піци"
        onChange={handleInputChange}
        value={searchValue}
        autoComplete="on"
      />
      {searchValue !== '' && (
        <CloseIcon onClick={clearInput} primary={searchValue} />
      )}
      <SearchIcon />
    </SearchWrapper>
  );
};

export default Search;
