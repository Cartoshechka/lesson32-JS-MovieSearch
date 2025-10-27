import React from 'react';
import { useMovieSearch } from './hooks/useMovieSearch';
import Search from './components/Search';
import MovieList from './components/MovieList';

// Main application component
const App: React.FC = () => {
  const { movies, loading, error, searchMovies } = useMovieSearch();

  // Handle search action
  const handleSearch = (query: string, append: boolean) => {
    searchMovies(query, append);
  };

  return (
    <div className="container">
      <h1>Movie Search App</h1>
      <Search onSearch={handleSearch} loading={loading} />
      <MovieList movies={movies} loading={loading} error={error} />
    </div>
  );
};

export default App;
