import React from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default function Layout({ children }) {
  return (
    <MuiThemeProvider>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div>
          <Toolbar>
            <ToolbarTitle text="Github Favorites" />
          </Toolbar>
          {children}
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: React.PropTypes.node
};
