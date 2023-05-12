import { CloseIcon, Input, SearchIcon, SearchWrapper } from './Search.styled';

const Search = ({ searchValue, setSearchValue }) => {
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
      />
      {searchValue !== '' && (
        <CloseIcon onClick={clearInput} primary={searchValue} />
      )}
      <SearchIcon />
    </SearchWrapper>
  );
};

export default Search;
