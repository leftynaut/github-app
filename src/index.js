// import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import promise from 'redux-promise';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import reducers from './reducers';
import routes from './routes';

injectTapEventPlugin();

const networkInterface = createNetworkInterface({uri: 'https://api.github.com/graphql'});
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    const token = '244c4ac1094b2dccc59ba368ce9ee4b9af5b42db';
    req.options.headers.authorization = `Bearer ${token}`;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface
});

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const rootEl = document.getElementById('root');

ReactDOM.render(
  <MuiThemeProvider>
    <ApolloProvider client={client} store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes} />
    </ApolloProvider>
  </MuiThemeProvider>
  , rootEl);
