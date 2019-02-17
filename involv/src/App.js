import React, { Component } from 'react';
// import logo from './logo.svg';
import Login from './Login.js'
import LoginBox from './LoginBox.js';
import RegisterBox from './RegisterBox.js';
import reactDOM from 'react-dom';
import './format.scss';
import home from './home.js'
import {Router, Route, browserHistory} from "react-router"
//this.props.router.push('/login')


class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}> 
        <Route path={"login"} component={Login} />
        <Route path={"home"} component={home} />
      </Router>
    );

   
  }
}
// app.get('formating.css', function(req, res){ res.send('formating.css'); res.end(); });
//    ;


reactDOM.render(
    <App />, document.getElementById("root"));
export default App;
