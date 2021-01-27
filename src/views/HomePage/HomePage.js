import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as moviesAPI from '../../serveses/movies-api';

export default function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2>Movies</h2>
      <ul>
        {movies &&
          movies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
