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
import CardDeck from 'react-bootstrap/CardDeck'
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
        {/* <div className="cardgroup">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/chess.jpg" roundedCircle />
  <Card.Body>
    <Card.Title>Chess Club</Card.Title>
    <Card.Text>
      Thornhill Secondary School - Join us every Tuesday from 5PM-7PM
    </Card.Text>
    <Button variant="primary">Learn More</Button>
  </Card.Body>
</Card>;
</div>
<div className="cardgroup">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://yt3.ggpht.com/a-/AN66SAxyqDCNY-64KzZtyG7UVkdVOP-AZucSGVgP3A=s900-mo-c-c0xffffffff-rj-k-no" roundedCircle />
  <Card.Body>
    <Card.Title>DECA</Card.Title>
    <Card.Text>
      Thornhill Seconday School - DECA, DECA, DECA! Meetings every Thursday from 4:30PM-7PM
    </Card.Text>
    <Button variant="primary">Learn More</Button>
  </Card.Body>
</Card>;
</div> */}

<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://cdn11.bigcommerce.com/s-dlmdd/images/stencil/500x200/products/300/8488/0140-basic-chess-pieces__18529.1496417994.jpg?c=2" />
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
  <Card>
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
  <Card>
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