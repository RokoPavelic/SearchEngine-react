import "./searchbar.css";

function SearchBar({ setSearchQuery, onClick }) {
  return (
    <div className="input">
      <input name="search" onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={onClick}>Search</button>
    </div>
  );
}

export default SearchBar;
