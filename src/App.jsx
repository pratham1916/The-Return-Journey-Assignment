import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        minHeight: '92vh',
      }}
    >
      <h1
        style={{
          marginBottom: '20px',
          fontSize: '24px',
          color: '#333',
        }}
      >
        The Return Journey Assignment 
      </h1>
      <SearchBar />
      <ItemList />
    </div>
  );
}

export default App;
