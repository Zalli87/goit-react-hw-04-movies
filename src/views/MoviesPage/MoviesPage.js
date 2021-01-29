import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import * as moviesAPI from '..//../serveses/movies-api';
import SearchForm from '..//../components/SearchForm/SearchForm';
import MoviesList from '..//../components/MoviesList/MoviesList';

function App() {
  const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handlFormSubmit = movieQuery => {
    setMovieQuery(movieQuery);
  };

  useEffect(() => {
    if (movieQuery === '') {
      return;
    }

    setStatus('pending');

    moviesAPI
      .fetchMovieByName(movieQuery)
      .then(({ results }) => {
        if (results.length === 0) {
          setStatus('idle');
          return;
        }
        setMovies(results);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  }, [movieQuery]);

  return (
    <>
      <SearchForm onSubmit={handlFormSubmit} />
      {status === 'idle' && <p>No movies found. Please, enter new query...</p>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MoviesList movies={movies} />}
      {status === 'rejected' && <p>{error.message}</p>}
    </>
  );
}

export default App;
