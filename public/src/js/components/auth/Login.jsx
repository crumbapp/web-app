import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="login entry-box">
        <div className="field">
          <input
            id="login-identifier"
            type="text"
            placeholder="Email or Username"
            ref="identifier"
            autofocus={ true }
          />
        </div>
        <div className="field">
          <input
            id="login-password"
            type="password"
            placeholder="Password"
            ref="password"
          />
        </div>
        <div className="field">
          <button 
            name="login-submit"
            type="button"
          >
            <span className="button-text">Login</span>
          </button>            
        </div>
      </div>
    );
  }
}

export default Login;