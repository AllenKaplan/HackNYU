import React, { Component } from 'react';
import reactDOM from 'react-dom';
import InterestBoxes from './InterestBoxes.js';
import './format.scss';
import {Router, Route} from "react-router-dom"

import './sheet2.css'
//this.props.router.push('/login')


class Interests extends React.Component {
   
  render() {
    return (
        <div className="Interests">
      <h1>Select Your Interests!</h1>
      
      <InterestBoxes/>
      </div>
    );

   
  }
}
// app.get('formating.css', function(req, res){ res.send('formating.css'); res.end(); });
//    ;


reactDOM.render(
    <Interests />, document.getElementById("root"));
export default Interests;