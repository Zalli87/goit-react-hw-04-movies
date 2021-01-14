import './App.css';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';

function App() {
  return (
    <>
      <Container>
        <AppBar></AppBar>
      </Container>
    </>
  );
}

export default App;
