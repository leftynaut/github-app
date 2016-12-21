// import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import store from './store';

import routes from './routes';

injectTapEventPlugin();

const rootEl = document.getElementById('root');

ReactDOM.render(
  <MuiThemeProvider>
    <ApolloProvider client={client} store={store}>
      <Router history={browserHistory} routes={routes} />
    </ApolloProvider>
  </MuiThemeProvider>
  , rootEl);
