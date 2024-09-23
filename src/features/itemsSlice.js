import { createSlice } from '@reduxjs/toolkit';
import itemListdata from './itemListdata.json';

// Initial state of the items slice
const initialState = {
  items: itemListdata.items, // List of items
  searchTerm: '',
  currentPage: 1,
  itemsPerPage: 35,
};


// Creating the items slice
const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

// Selector to get filtered items based on search term and pagination
export const selectFilteredItems = (state) => {
  const filteredItems = state.items.items.filter(item =>
    item.toLowerCase().includes(state.items.searchTerm.toLowerCase())
  );

  const startIndex = (state.items.currentPage - 1) * state.items.itemsPerPage;
  const endIndex = startIndex + state.items.itemsPerPage;

  return filteredItems.slice(startIndex, endIndex);
};

// Selector to calculate total pages based on filtered items
export const selectTotalPages = (state) => {
  const filteredItems = state.items.items.filter(item =>
    item.toLowerCase().includes(state.items.searchTerm.toLowerCase())
  );
  return Math.ceil(filteredItems.length / state.items.itemsPerPage);
};

// Exporting actions for use in components
export const { setSearchTerm, setCurrentPage } = itemsSlice.actions;

export default itemsSlice.reducer;
