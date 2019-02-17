import React from 'react';
import { Link } from 'react-router-dom'
//import './format.scss';

// import reactDOM from 'react-dom';


class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) {
      alert('registered ');
  }

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              className="login-input"
              placeholder="First Name"/>
          </div>

          <div className="input-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              className="login-input"
              placeholder="Last Name"/>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="login-input" placeholder="Email"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitRegister
            .bind(this)}>Register
                     
          </button>
        
        </div>
      </div>
    );
  }
}
export default RegisterBox;