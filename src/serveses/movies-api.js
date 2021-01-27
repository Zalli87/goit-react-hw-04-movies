import PropTypes from 'prop-types';

const API_KEY = '34f6edc4e2e6dba178ed9cffdd1e009e';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`,
  );
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieByName(movieQuery) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${movieQuery}&page=1&include_adult=false`,
  );
}

export function fetchMovieCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieReview(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}

const moviesAPI = {
  fetchTrendingMovies,
  fetchMovieByName,
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReview,
};

moviesAPI.propTypes = {
  url: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
  movieQuery: PropTypes.string.isRequired,
};
