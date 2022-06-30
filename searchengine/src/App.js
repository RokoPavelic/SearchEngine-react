import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}`;

  const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data.query.search);
    setSearchResults(data.query.search);
  };

  // useEffect(() => {
  //   searchQuery && fetchData();
  // }, [searchQuery]);

  return (
    <div className="App">
      <SearchBar setSearchQuery={setSearchQuery} onClick={fetchData} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default App;
