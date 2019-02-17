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
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

//import ToggleButton from 'react-bootstrap/ca'

//this.props.router.push('/login')


export default class home extends Component {
  constructor(props, context) {
    super(props, context);

    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: [1, 100],
    };
  }
  
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
      <div className="header">
      Search for Opportunities
      <ReactSearchBox
        placeholder="Search for Opportunities"
        value="Doe"
        data={this.data}
        callback={record => console.log(record)}
      />
      </div>
      <div className="header"> 
        These extracuricular activities are suggested for you
      </div>
        <div className="cardgroup">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/171x180" roundedCircle />
  <Card.Body>
    <Card.Title>Chess Club</Card.Title>
    <Card.Text>
      Thornhill Secondary School - Join us every Tuesday from 5PM-7PM
    </Card.Text>
    <Button variant="primary">Learn More</Button>
  </Card.Body>
</Card>;
</div>
</div>
  
    );
  }
}


//{/* // app.get('formating.css', function(req, res){ res.send('formating.css'); res.end(); });
//    ;


// reactDOM.render(
//     <home />, document.getElementById("root"));
//export default home; */}