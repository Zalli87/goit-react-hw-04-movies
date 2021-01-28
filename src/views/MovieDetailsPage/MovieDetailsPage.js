import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import * as moviesAPI from '..//../serveses/movies-api';
import CastPage from '../CastPage/CastPage';
import ReviewPage from '../ReviewsPage/ReviewsPage';
import MovieCard from '..//../components/MovieCard/MovieCard';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');
    moviesAPI
      .fetchMovieById(movieId)
      .then(response => {
        setMovie(response);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      {status === 'idle' && <p>Not any information for this movie</p>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <>
          <MovieCard movie={movie} url={url} />

          <Route path={`${path}/cast`}>
            <CastPage movieId={movieId} />
          </Route>
          <Route path={`${path}/review`}>
            <ReviewPage movieId={movieId} />
          </Route>
        </>
      )}
      {status === 'rejected' && <p>{error}</p>}
    </>
  );
}

MovieDetailsPage.protoType = {
  movieId: PropTypes.string.isRequired,
};
