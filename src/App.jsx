import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">The Return Journey Assignment</h1>
      <SearchBar /> {/* Search input for filtering items */}
      <ItemList /> {/* List of items to display */}
    </div>
  );
}

export default App;
