import React from 'react';
import {Route} from 'react-router';

/**
 * Required Components
 */
import App from './components/AppComponent';

const routes = (
  <Route name="app" path="/" handler={App} />
);

export default routes;
