// Movie data structure from OMDb API
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

// OMDb API response structure
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface OMDbResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}

// Return type for useMovieSearch hook
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface MovieSearchHookReturn {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  searchMovies: (query: string, prepend?: boolean) => Promise<void>;
  clearMovies: () => void;
}
