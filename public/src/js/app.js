import React from 'react';
import Router from 'react-router';

//  TODO: Implement mapbox
//  import L from 'mapbox.js';
//  TODO: Retrieve Mapbox access token
//  L.mapbox.accessToken = ''

import routes from './routes';

/**
 * Initialize router
 */
Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.getElementById('app'));
});