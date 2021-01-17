import './App.css';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomePage from './components/HomePage/HomePage';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <Container>
      <AppBar />
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/movies">
        <SearchForm />
      </Route>
    </Container>
  );
}

export default App;
