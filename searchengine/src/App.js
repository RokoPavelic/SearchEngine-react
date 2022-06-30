import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [offset, setOffset] = useState(0);
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${offset}`;

  const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data.query.search);
    setSearchResults(data.query.search);
  };

  useEffect(() => {
    searchQuery && fetchData();
  }, [offset]);

  return (
    <div className="App">
      <h1>wikipedia search</h1>
      <SearchBar setSearchQuery={setSearchQuery} onClick={fetchData} />
      <SearchResults searchResults={searchResults} />
      <div>
        <button className="Btn" onClick={() => setOffset(offset - 10)}>
          Previous
        </button>
        <button className="Btn" onClick={() => setOffset(offset + 10)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
