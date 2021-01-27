import { useState, useEffect } from 'react';
import { NavLink, Route, useParams, useRouteMatch } from 'react-router-dom';
import * as moviesAPI from '..//../serveses/movies-api';
import CastPage from '../CastPage/CastPage';
import ReviewPage from '../ReviewsPage/ReviewsPage';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    moviesAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img src={`${BASE_URL}${movie.backdrop_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
          <p>User score: {movie.vote_average}</p>
          <p>Genres: {movie.genres.map(({ name }) => name).join(', ')} </p>
          <p>{movie.overview}</p>
          <h2>Info</h2>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              {' '}
              <NavLink to={`${url}/review`}>Review</NavLink>
            </li>
          </ul>

          <Route path={`${path}/cast`}>
            <CastPage movieId={movieId} />
          </Route>
          <Route path={`${path}/review`}>
            <ReviewPage movieId={movieId} />
          </Route>
        </>
      )}
    </>
  );
}
