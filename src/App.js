import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/layout';
import Home from './components/home';
import Profile from './components/profile';

export default function App() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='/author/:username' component={Profile} />
      </Route>
    </Router>
  );
}
