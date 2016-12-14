// import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

// commented out code represents the default state prior to use of custom backend

// import favorites from './data/favorites';

// const defaultState = {
//   repo: favorites
// };
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const rootEl = document.getElementById('root');


// <Provider store={createStoreWithMiddleware(reducers, defaultState)}>

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>
  , rootEl);
