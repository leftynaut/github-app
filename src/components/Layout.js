import React from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers';

/**
 * The provided Redux store uses the `redux-logger` middleware.
 * If you open your browser console you should see a console
 * group containing the state and action details.
 *
 * redux-devtools is not provided. If you wish to use it, feel free
 * to implement it, but it is not required.
 *
 * @TODO Please remove the test action below.
 */

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
