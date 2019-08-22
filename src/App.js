/* eslint react/no-did-mount-set-state: 0 */
import React, {createContext, useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { load, save } from 'redux-localstorage-simple';
import logo from './logo.svg';
import './App.scss';

import rootReducer from './rootReducer';
import MoviesList from './movies/MoviesList';
import MovieDetail from './movies/MovieDetail';
import Search from './search/Search';

const middleware = [logger, thunk];

export const MoviesContext = createContext([[], () => {}])

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save()))
);

const App = () => {

  const [movies, setMovies] = useState([]);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="has-background-link  hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title has-text-white-ter is-size-1 has-text-centered is-family-sans-serif">
                  PMDB
                </h1>
              </div>
            </div>
          </div>
            <MoviesContext.Provider value={[movies, setMovies]}>
              <Switch>
                <Route exact path="/" component={MoviesList} />
                <Route path="/:id" component={MovieDetail} />
              </Switch>
            </MoviesContext.Provider>
        </div>
      </Router>        
    </Provider>
  );
};

export default App;
