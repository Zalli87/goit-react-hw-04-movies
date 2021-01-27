import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as moviesAPI from '..//../serveses/movies-api';

export default function ReviewPage({ movieId }) {
  const [reviews, setReviews] = useState(null);

  console.log(movieId);
  useEffect(() => {
    moviesAPI
      .fetchMovieReview(movieId)
      .then(({ results }) => setReviews(results));
  }, []);

  return (
    <>
      {reviews &&
        reviews.map(({ author, content }) => (
          <ul>
            <li>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          </ul>
        ))}
    </>
  );
}
