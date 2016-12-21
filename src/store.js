import promise from 'redux-promise';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import client from './apolloClient';

const middleware = [client.middleware(), promise];

const enhancers = [];
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedMiddleware = compose(
  applyMiddleware(...middleware), ...enhancers
);

const store = createStore(
  reducers,
  composedMiddleware
);

export default store;
