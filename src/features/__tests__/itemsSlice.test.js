import itemsReducer, { setSearchTerm } from '../itemsSlice';
import itemListdata from '../itemListdata.json';

// Test case for initial state of the reducer
test('should return the initial state', () => {
    expect(itemsReducer(undefined, {})).toEqual({
        items: itemListdata.items, // Use the initial item list
        searchTerm: '',
        currentPage: 1,
        itemsPerPage: 35,
    });
});

// Test cases for handling search term changes
test('should handle search term change to "Venice Grand Canal"', () => {
    const previousState = { 
        items: itemListdata.items, // Use the initial item list
        searchTerm: '',
        currentPage: 1,
        itemsPerPage: 35,
    };
    expect(itemsReducer(previousState, setSearchTerm('Venice Grand Canal'))).toEqual({
        items: itemListdata.items,
        searchTerm: 'Venice Grand Canal', 
        currentPage: 1,
        itemsPerPage: 35,
    });
});

// Repeat test cases for other search terms
test('should handle search term change to "Agra Taj Mahal"', () => {
    const previousState = { 
        items: itemListdata.items,
        searchTerm: '',
        currentPage: 1,
        itemsPerPage: 35,
    };
    expect(itemsReducer(previousState, setSearchTerm('Agra Taj Mahal'))).toEqual({
        items: itemListdata.items,
        searchTerm: 'Agra Taj Mahal',
        currentPage: 1,
        itemsPerPage: 35,
    });
});

// Repeat test cases for other search terms
test('should handle search term change to "Havana Old Town"', () => {
    const previousState = { 
        items: itemListdata.items,
        searchTerm: '',
        currentPage: 1,
        itemsPerPage: 35,
    };
    expect(itemsReducer(previousState, setSearchTerm('Havana Old Town'))).toEqual({
        items: itemListdata.items,
        searchTerm: 'Havana Old Town',
        currentPage: 1,
        itemsPerPage: 35,
    });
});

// Repeat test cases for other search terms
test('should handle search term change to "Vegas"', () => {
    const previousState = { 
        items: itemListdata.items,
        searchTerm: '',
        currentPage: 1,
        itemsPerPage: 35,
    };
    expect(itemsReducer(previousState, setSearchTerm('Vegas'))).toEqual({
        items: itemListdata.items,
        searchTerm: 'Vegas',
        currentPage: 1,
        itemsPerPage: 35,
    });
});
