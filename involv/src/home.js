import React, { Component } from 'react';
// import logo from './logo.svg';
import './format.scss';
//import { Searchbar } from 'react-native-paper';
import ReactSearchBox from 'react-search-box'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './home.css'

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
        <div className="homePage">

      <div className="dropdown">
<DropdownButton id="dropdown-basic-button" title="Menu">
  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
  <Dropdown.Item href="#/action-1">Portal</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Schedule</Dropdown.Item>
  <Dropdown.Item href="#/action-3">School Page</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
</DropdownButton>
</div>

<div className="header">
Welcome Daria  
</div>  
      <div className="header2">
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
       
<CardDeck>
  <Card bg="dark" text="white" style={{width:"100px", alignItems:"center"}}>
    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/250px-ChessSet.jpg"/>
    <Card.Body>
      <Card.Title>Chess Club</Card.Title>
      <Card.Text>
      Thornhill Secondary School - Join us every Tuesday from 5PM-7PM
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card bg="dark" text="white" style={{width:"100px", alignItems:"center"}}>
    <Card.Img variant="top" src="https://www.gannett-cdn.com/-mm-/814d8e115acc08ac2cd65e46a47370886a13c7db/c=167-0-834-667/local/-/media/2018/02/06/Pensacola/Pensacola/636535542769028532-sm2018-0206-gulf-breeze-arnold-soccer-1-3a-quarterfinal-18.jpg?width=200&height=200&fit=crop" />
    <Card.Body>
      <Card.Title>Thornhill Soccer Club</Card.Title>
      <Card.Text>
      Thornhill Soccer Club - Our Select team is looking for new team members. Try outs will be heald on March 3rd come out and try out!
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card bg="dark" text="white" style={{width:"100px", alignItems:"center"}}>
    <Card.Img variant="top" src="https://d3e1o4bcbhmj8g.cloudfront.net/photos/715402/big_square/c742e490d77772e5d7e538878400eeaa925b358f.jpg"  />
    <Card.Body>
      <Card.Title>Reach for the Top</Card.Title>
      <Card.Text>
        Thornhill Secondary School - Reach for the Top is a trivia club! We want you to join. We meet Mondays from 6:00PM-8:00PM
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
</CardDeck>;
</div>


    );
  }

}


//{/* // app.get('formating.css', function(req, res){ res.send('formating.css'); res.end(); });
//    ;


// reactDOM.render(
//     <home />, document.getElementById("root"));
//export default home; */}