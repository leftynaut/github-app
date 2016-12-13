import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Profile from './components/profile';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/author/:username' component={Profile} />
  </Route>
);
