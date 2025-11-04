import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

interface SearchProps {
  onSearch: (query: string, append: boolean) => void;
  loading: boolean;
}

// Search component with debounced input and prepend checkbox
const Search: React.FC<SearchProps> = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');
  const [prependToList, setPrependToList] = useState(false);
  const [lastSearchValue, setLastSearchValue] = useState('');

  // Debounced search function (2 second delay)
  const debouncedSearch = useDebounce((searchQuery: string) => {
    if (searchQuery.trim() && searchQuery.length >= 3 && searchQuery !== lastSearchValue) {
      onSearch(searchQuery, prependToList);
      setLastSearchValue(searchQuery);
      setQuery(''); // Clear input after search
    }
  }, 2000);

  // Trigger search when query changes
  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    }
  }, [query, debouncedSearch]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrependToList(e.target.checked);
  };

  // ...existing code...

  return (
    <div className="search">
      <div className="search__group search__group--input">
        <label className="search__label-input" htmlFor="search">
          Search movies
        </label>
        <input
          className="search__input"
          type="text"
          id="search"
          placeholder="Enter movie title..."
          value={query}
          onChange={handleInputChange}
          disabled={loading}
        />
      </div>

      <div className="search__group search__group--checkbox">
        <input
          className="search__checkbox"
          type="checkbox"
          id="checkbox"
          checked={prependToList}
          onChange={handleCheckboxChange}
        />
        <label className="search__label-checkbox" htmlFor="checkbox">
          Add movies to existing list
        </label>
      </div>
    </div>
  );
};

export default Search;
