import { useState, useCallback } from 'react';
import type { Movie, OMDbResponse, MovieSearchHookReturn } from '../types/movie';

// OMDb API configuration
const API_KEY = '11a93a0d'; // Same key from the original example
const API_URL = 'https://www.omdbapi.com/';

// Custom hook for movie search functionality
export const useMovieSearch = (): MovieSearchHookReturn => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Search movies with API call
  const searchMovies = useCallback(async (query: string, append = false) => {
    if (!query.trim() || query.length < 3) {
      setError('Query must contain at least 3 characters');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
      const data: OMDbResponse = await response.json();

      if (data.Response === 'True' && data.Search) {
        setMovies(prevMovies => append ? [...prevMovies, ...data.Search] : data.Search);
      } else {
        setError(data.Error || 'Movies not found');
        if (!append) {
          setMovies([]);
        }
      }
    } catch (err) {
      setError('Error loading data');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Clear movies list
  const clearMovies = useCallback(() => {
    setMovies([]);
    setError(null);
  }, []);

  return {
    movies,
    loading,
    error,
    searchMovies,
    clearMovies
  };
};
