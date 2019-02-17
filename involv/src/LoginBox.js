import React from 'react';
//import './formating.scss';
import { Link } from 'react-router'


class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {
  //  <Link to='/interests'>Interests</Link>;
  return(<Link to="/interests"></Link>);
  }

  render() {
    return (
      <div className="inner-container">   
        <div className="header">
          Login
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
          <Link to="/interests" className="btn btn-primary">Login</Link>
          {/* <button
            type="button"
            className="login-btn"
            onClick={this
            .submitLogin
            }>Login</button> */}
        </div>
      </div>
    );
  }

}

export default LoginBox;