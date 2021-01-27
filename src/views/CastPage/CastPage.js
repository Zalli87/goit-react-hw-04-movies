import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as moviesAPI from '..//../serveses/movies-api';

export default function CastPage({ movieId }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const [cast, setCast] = useState(null);

  console.log(movieId);
  useEffect(() => {
    moviesAPI.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, []);

  return (
    <>
      <ul>
        {cast &&
          cast.map(({ id, name, profile_path, character }) => (
            <li>
              <img src={`${BASE_URL}${profile_path}`} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
