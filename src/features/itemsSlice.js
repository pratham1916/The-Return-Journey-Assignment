import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
      'JavaScript', 'Python', 'Java', 'C#', 'C++', 'Ruby', 'PHP', 'Swift',
      'Kotlin', 'Go', 'TypeScript', 'Rust', 'Scala', 'Dart', 'Elixir',
      'Clojure', 'Haskell', 'R', 'Objective-C', 'Perl', 'Shell', 'HTML',
      'CSS', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js',
      'Django', 'Flask', 'Ruby on Rails', 'Spring', 'Laravel',
      'ASP.NET', 'GraphQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'SQLite',
      'Redis', 'Elasticsearch', 'Docker', 'Kubernetes', 'AWS',
      'Azure', 'Google Cloud', 'Firebase', 'Heroku', 'Vite', 'Webpack'
    ],
    searchTerm: ''
  };

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { setSearchTerm } = itemsSlice.actions;
export const selectFilteredItems = (state) =>
  state.items.items.filter(item =>
    item.toLowerCase().includes(state.items.searchTerm.toLowerCase())
  );
export default itemsSlice.reducer;
