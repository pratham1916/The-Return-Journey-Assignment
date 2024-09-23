import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/itemsSlice';
import { debounce } from 'lodash';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    debounce((e) => {
      dispatch(setSearchTerm(e.target.value)); // Dispatch search term to the store
    }, 300),[]
  );

  return (
    <input
      type="text"
      placeholder="Search items..."
      onChange={handleSearch} // Trigger search on input change
      className="search-input"
    />
  );
};

export default SearchBar;
