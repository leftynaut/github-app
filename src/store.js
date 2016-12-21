import promise from 'redux-promise';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import client from './apolloClient';

const middleware = [client.middleware(), promise];

const composedMiddleware = compose(
  applyMiddleware(...middleware)
);

const store = createStore(
  reducers,
  composedMiddleware
);

export default store;
