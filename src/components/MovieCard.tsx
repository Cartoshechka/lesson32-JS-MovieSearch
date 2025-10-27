import React from 'react';
import type { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

// Individual movie card component
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { Title, Year, Type, Poster } = movie;

  // Handle poster image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/no-poster.jpg'; // Fallback image
  };

  // ...existing code...

  return (
    <div className="movie">
      <img
        className="movie__poster"
        src={Poster !== 'N/A' ? Poster : '/no-poster.jpg'}
        alt={`${Title} ${Year}`}
        title={`${Title} (${Year})`}
        onError={handleImageError}
      />
      <div className="movie__info">
        <h3 className="movie__title">{Title}</h3>
        <p className="movie__type">Type: {Type}</p>
        <p className="movie__year">Year: {Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
