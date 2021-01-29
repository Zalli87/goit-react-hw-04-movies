import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import * as moviesAPI from '../../serveses/movies-api';
import MoviesList from '..//../components/MoviesList/MoviesList';

export default function HomePage() {
  const { url } = useRouteMatch();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    setStatus('pending');
    moviesAPI
      .fetchTrendingMovies()
      .then(({ results }) => {
        setTrendMovies(results);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  }, []);

  return (
    <>
      <h2>Trending Movies</h2>
      {status === 'idle' && <p>Not any cast on this movie</p>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MoviesList movies={trendMovies} />}
      {status === 'rejected' && <p>{error.message}</p>}
    </>
  );
}
