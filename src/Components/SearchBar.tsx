import { searchIcon } from "../icons/icons";

export function SearchBar({ initialValue = "" }: { initialValue?: string }) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.currentTarget.search.value;
    // Implement search logic here
    console.log("Searching for:", query);
    window.location.href = `#search`;
    window.location.search = `?q=${encodeURIComponent(query)}`;
  };
  return (
    <form onSubmit={handleSearch} className="search-bar-container">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        name="search"
        type="search"
        className="search-bar"
        placeholder="Search..."
        defaultValue={initialValue || ""}
      />
      <button type="submit" className="unstyled-btn">
        {searchIcon()}
      </button>
    </form>
  );
}
