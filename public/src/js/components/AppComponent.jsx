/**
 * This is the base component for the application
 * It serves as the parent for all other components that are rendered within it
 */

import React from 'react';
import { RouteHandler } from 'react-router';

/**
 * Required Components
 */
import Footer from './Footer';
import NavBar from './NavBar';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
}

export default AppComponent;
