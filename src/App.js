import './App.css';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomePage from './views/HomePage/HomePage';
import SearchForm from './components/SearchForm/SearchForm';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './views/MoviesPage/MoviesPage';

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
