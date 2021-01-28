import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import notFoundImg from '..//../images/notFoundImg.jpg';

export default function MovieCard({ movie, url }) {
  const { backdrop_path, title, vote_average, genres, overview } = movie;
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <img
        src={backdrop_path ? `${BASE_URL}${backdrop_path}` : notFoundImg}
        alt={title}
      />
      <h1>{title}</h1>
      <p>User score: {vote_average}</p>
      <p>Genres: {genres.map(({ name }) => name).join(', ')} </p>
      <p>{overview}</p>
      <h2>Info</h2>
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/review`}>Review</NavLink>
        </li>
      </ul>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
  url: PropTypes.string.isRequired,
};
