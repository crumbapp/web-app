/**
 * This is the NavBar component for the application
 * Handle routing for the application via user click actions
 * Rendered in AppComponent regardless of route
 */

import React from 'react';

//  TODO: Implement NavBar page links
 import { Link } from 'react-router';

class NavBar extends React.Component {
  render() {
    return (
      <div className="app-navbar">
        <Link to="login">
          <button>Login</button>
        </Link>
        <Link to="signup">
          <button>Signup</button>
        </Link>
      </div>
    );
  }
}

export default NavBar;
