/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MoviesList from './movies/MoviesList';
import MovieDetail from './movies/MovieDetail';
import Loader from './components/Loader';
import LoaderContextProvider from './context/LoaderContext';

const App = () => (
  <LoaderContextProvider>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <Loader />
        </header>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
    </LoaderContextProvider>
);

export default App;
