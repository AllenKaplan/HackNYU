import React from 'react';
import reactDOM from 'react-dom';
import InterestBoxes from './InterestBoxes.js';
import './format.scss';
import { Link } from 'react-router'

import './sheet2.css'
//this.props.router.push('/login')


class Interests extends React.Component {
   
  render() {
    return (
        <div className="Interests">
      <h1>Select Your Interests!</h1>
      
      <InterestBoxes/>

      <h1>Ready?</h1>
      <Link to="/home" className="btn btn-primary">Find Your Match</Link>
      </div>
    );

   
  }
}
// app.get('formating.css', function(req, res){ res.send('formating.css'); res.end(); });
//    ;


reactDOM.render(
    <Interests />, document.getElementById("root"));
export default Interests;