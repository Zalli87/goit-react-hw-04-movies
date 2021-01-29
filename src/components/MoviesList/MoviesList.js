import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.protoType = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};
