import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import './buttonSheet.css'

class InterestBoxes extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: [1, 100],
      };
    }
  
    handleChange(value, event) {
      this.setState({ value });
    }
  
    render() {
       
      return (
          <div>
        <div className="buttonGroup">
        <ToggleButtonGroup
          type="checkbox"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <ToggleButton value={1}>Athletics</ToggleButton>
          <ToggleButton value={2}>Arts - Visual</ToggleButton>
          <ToggleButton value={3}>Arts - Thatre</ToggleButton>
          <ToggleButton value={4}>Arts - Music</ToggleButton>
        </ToggleButtonGroup>
</div>
<div className="buttonGroup">
        <ToggleButtonGroup
        type="checkbox"
        value={this.state.value}
        onChange={this.handleChange}
        >
        <ToggleButton value={5}>Science</ToggleButton>
        <ToggleButton value={6}>Technology</ToggleButton>
        <ToggleButton value={7}>Engineering</ToggleButton>
        <ToggleButton value={8}>Math</ToggleButton>
        </ToggleButtonGroup>
        </div>
        <div className="buttonGroup">
        <ToggleButtonGroup
        type="checkbox"
        value={this.state.value}
        onChange={this.handleChange}
        >
        <ToggleButton value={9}>Language</ToggleButton>
        <ToggleButton value={10}>Games/Puzzles</ToggleButton>
        <ToggleButton value={11}>Business</ToggleButton>
        <ToggleButton value={12}>Charity</ToggleButton>
        </ToggleButtonGroup>
        </div>

        <h1>Select Your Involvement Type</h1> 
        <div className="buttonGroup">
        <ToggleButtonGroup
          type="checkbox"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <ToggleButton value={13}>Volunteer</ToggleButton>
          <ToggleButton value={14}>Community</ToggleButton>
          <ToggleButton value={15}>Religious</ToggleButton>
          <ToggleButton value={16}>Paid</ToggleButton>
          <ToggleButton value={17}>Unpaid</ToggleButton>
          <ToggleButton value={18}>Summer</ToggleButton>
          <ToggleButton value={19}>March Break</ToggleButton>
          <ToggleButton value={20}>Winter Break</ToggleButton>
          <ToggleButton value={21}>Morning</ToggleButton>
          <ToggleButton value={22}>Evening</ToggleButton>
          <ToggleButton value={23}>University Affiliated</ToggleButton>
          <ToggleButton value={24}>Hackathons</ToggleButton>
        </ToggleButtonGroup>
        </div>
        <div className="buttonGroup">
        <ToggleButtonGroup
          type="checkbox"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <ToggleButton value={25}>City/Town</ToggleButton>
          <ToggleButton value={26}>Awards</ToggleButton>
          <ToggleButton value={27}>Non-Profit</ToggleButton>
          <ToggleButton value={28}>School Board</ToggleButton>
          <ToggleButton value={29}>Travel</ToggleButton>
          <ToggleButton value={30}>Exchange</ToggleButton>
          <ToggleButton value={31}>External Organizations</ToggleButton>
          <ToggleButton value={32}>Free</ToggleButton>
          <ToggleButton value={33}>Fees</ToggleButton>
          <ToggleButton value={34}>Langauge Immersion</ToggleButton>
          <ToggleButton value={35}>Competitive</ToggleButton>
          <ToggleButton value={36}>Application Required</ToggleButton>
        </ToggleButtonGroup>
        </div>
        </div>
      );
    }
  }
  
//   render(<InterestBoxes/>);

export default InterestBoxes;