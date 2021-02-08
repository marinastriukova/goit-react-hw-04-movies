import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';

const HomePage = lazy(() =>
  import('./views/HomePage'));

const MoviesPage = lazy(() =>
  import('./views/MoviesPage'));

const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage'));

function App() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<h1>Loader...</h1>}>
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/movies/:movieId" component={MovieDetailsPage} />

          <Route path="/movies" component={MoviesPage} />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App;
