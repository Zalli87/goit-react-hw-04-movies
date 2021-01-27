import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import * as moviesAPI from '..//../serveses/movies-api';
import notFoundImg from '..//../images/notFoundImg.jpg';

export default function CastPage({ movieId }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');
    moviesAPI
      .fetchMovieCast(movieId)
      .then(({ cast }) => {
        if (cast.length === 0) {
          setStatus('idle');
          return;
        }
        setCast(cast);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      {status === 'idle' && <p>Not any cast on this movie</p>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <>
          <ul>
            {cast.map(({ id, name, profile_path, character }) => (
              <li key={id}>
                <img
                  src={
                    profile_path ? `${BASE_URL}${profile_path}` : notFoundImg
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {status === 'rejected' && <p>{error}</p>}
    </>
  );
}

CastPage.protoType = {
  movieId: PropTypes.string.isRequired,
};
