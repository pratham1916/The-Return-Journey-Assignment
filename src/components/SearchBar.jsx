import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/itemsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search items..."
      onChange={handleSearch}
      style={{
        padding: '10px',
        border: '2px solid #ccc',
        borderRadius: '4px',
        width: '100%',
        maxWidth: '400px',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        outline: 'none',
        transition: 'border-color 0.3s',
      }}
    />
  );
};

export default SearchBar;
