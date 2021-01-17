import { useState, useEffect } from 'react';
import * as moviesAPI from '../../serveses/movies-api';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2>Movies</h2>
      <ul>
        {movies &&
          movies.results.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </>
  );
}
