import itemsReducer, { setSearchTerm } from '../itemsSlice';

test('should return the initial state', () => {
    expect(itemsReducer(undefined, {})).toEqual({
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
    });
});

test('should handle search term change to "JavaScript"', () => {
    const previousState = { items: [], searchTerm: '' };
    expect(itemsReducer(previousState, setSearchTerm('JavaScript'))).toEqual({
        items: [],
        searchTerm: 'JavaScript'
    });
});

test('should handle search term change to "Python"', () => {
    const previousState = { items: [], searchTerm: '' };
    expect(itemsReducer(previousState, setSearchTerm('Python'))).toEqual({
        items: [],
        searchTerm: 'Python'
    });
});

test('should handle search term change to "MySQL"', () => {
    const previousState = { items: [], searchTerm: '' };
    expect(itemsReducer(previousState, setSearchTerm('MySQL'))).toEqual({
        items: [],
        searchTerm: 'MySQL'
    });
});

test('should handle search term change to "Firebase"', () => {
    const previousState = { items: [], searchTerm: '' };
    expect(itemsReducer(previousState, setSearchTerm('Firebase'))).toEqual({
        items: [],
        searchTerm: 'Firebase'
    });
});
