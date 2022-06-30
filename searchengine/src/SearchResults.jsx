function SearchResults({ searchResults }) {
  return (
    <div>
      {searchResults.map((result, index) => (
        <div key={index}>
          {/* <h2>{result.title}</h2> */}
          <a
            href={`https://en.wikipedia.org/wiki/${result.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {result.title}
          </a>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
