// import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://my-api.graphql.com' })
});

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const rootEl = document.getElementById('root');

ReactDOM.render(
  <MuiThemeProvider>
    <ApolloProvider client={client}>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    </ApolloProvider>
  </MuiThemeProvider>
  , rootEl);
