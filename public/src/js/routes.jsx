import React from 'react';
import { Route, DefaultRoute } from 'react-router';
/**
 * Required Components
 */
import App from './components/AppComponent';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

const routes = (
  <Route name="app" path="/" handler={ App }>
    <DefaultRoute handler={ Signup } />
    <Route name="login" path="login" handler={ Login } />
    <Route name="signup" path="signup" handler={ Signup } />
  </Route>
);

export default routes;
