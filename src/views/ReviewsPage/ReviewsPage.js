import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import * as moviesAPI from '..//../serveses/movies-api';

export default function ReviewPage({ movieId }) {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');

    moviesAPI
      .fetchMovieReview(movieId)
      .then(({ results }) => {
        if (results.length === 0) {
          setStatus('idle');
          return;
        }
        setReviews(results);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      {status === 'idle' && <p>Not reviews for this movie</p>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <>
          {reviews.map(({ author, content }) => (
            <ul key={author}>
              <li>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            </ul>
          ))}
        </>
      )}
      {status === 'rejected' && <p>{error}</p>}
    </>
  );
}

ReviewPage.protoType = {
  movieId: PropTypes.string.isRequired,
};
