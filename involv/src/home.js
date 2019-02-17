import React, { Component } from 'react';
// import logo from './logo.svg';
import Login from './Login.js'
import LoginBox from './LoginBox.js';
import RegisterBox from './RegisterBox.js';
import reactDOM from 'react-dom';
import './format.scss';
import {Router, Route, browserHistory} from "react-router"
//import { Searchbar } from 'react-native-paper';
import ReactSearchBox from 'react-search-box'

//this.props.router.push('/login')


export default class home extends Component {
  data = [
    {
      key: 'athletics',
      value: 'Athletics',
    },
    {
      key: 'science',
      value: 'Science',
    },
    {
      key: 'technology',
      value: 'Technology',
    },
    {
      key: 'engineering',
      value: 'Engineering',
    },
    {
      key: 'math',
      value: 'Math',
    },
  ]

  render() {
    return (
        <div className="inner-container">

        <div className="header">
Welcome, Daria  
</div>
      <ReactSearchBox
        placeholder="Placeholder"
        value="Doe"
        data={this.data}
        callback={record => console.log(record)}
      />
      </div>
    );
  }
}
  
  

// app.get('formating.css', function(req, res){ res.send('formating.css'); res.end(); });
//    ;


// reactDOM.render(
//     <home />, document.getElementById("root"));
//export default home;