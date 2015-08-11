import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="signup entry-box">
        <div className="field">
          <input 
            id="signup-email"
            type="email" 
            placeholder="Enter your email address"
            ref="email"
            autofocus={ true }
          />
        </div>
        <div className="field">
          <input
            id="signup-username"
            type="text"
            placeholder="Enter a username"
            ref="username"
          />
        </div>
        <div className="field">
          <input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            ref="password"
          />
        </div>
        <div className="field">
          <input
            id="signup-confirm"
            type="password"
            placeholder="Confirm your password"
            ref="confirm"
          />
        </div>
        <div className="field">
          <button 
            name="signup-submit"
            type="button"
          >
            <span className="button-text">Signup</span>
          </button>            
        </div>
      </div>
    );
  }
}

export default Signup;