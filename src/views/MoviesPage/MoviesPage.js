import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesAPI from '..//../serveses/movies-api';
import SearchForm from '..//../components/SearchForm/SearchForm';

function App() {
  const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const handlFormSubmit = movieQuery => {
    setMovieQuery(movieQuery);
  };

  useEffect(() => {
    if (movieQuery === '') {
      return;
    }
    moviesAPI.fetchMovieByName(movieQuery).then(setMovies);
  }, [movieQuery]);

  return (
    <>
      <SearchForm onSubmit={handlFormSubmit} />
      {movies &&
        movies.results.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </>
  );
}

export default App;
