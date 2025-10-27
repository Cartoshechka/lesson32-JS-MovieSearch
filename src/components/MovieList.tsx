import React from 'react';
import type { Movie } from '../types/movie';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

// Movie list component with loading and error states
const MovieList: React.FC<MovieListProps> = ({ movies, loading, error }) => {
  // Show loading state
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Show error state
  if (error) {
    return <div className="no-movies">{error}</div>;
  }

  // Don't render anything if no movies
  if (movies.length === 0) {
    return null;
  }

  // Render movie grid
  return (
    <div className="movies" id="movies-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
