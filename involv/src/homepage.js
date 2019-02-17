import React from 'react';
// import {Jumbotron, Button} from 'react-bootstrap/Carousel'
import Carousel from 'react-bootstrap/Carousel'
import './buttonSheet.css' 
import { Link} from "react-router"

class homepage extends React.Component {
    // render() {
    //     var styles ={
    //       "backgroundImage":"http://worldkings.org/Userfiles/Upload/images/Yale.jpg"
    //     }
    //     return (
    //       <div>
    //         <Jumbotron style={styles}>
    //             <h1>Public Art</h1>
    //             <br/>
    //             <p>
    //             A crowd-sourced archive of art in public spaces.
    //             </p>
    
    //             <Button bsStyle="primary" href="#" >Learn more</Button>
    
    //             <Button bsStyle="primary" href="#" >Submit a Piece</Button> 
    //             {/*link these!*/}
    
    //         </Jumbotron>
    //       </div>
    //     );
    //   }
    // }

//     render(){
//   return (
//     <div>
//       <Jumbotron>
//         <h1 className="display-3">Hello, world!</h1>
//         <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
//         <hr className="my-2" />
//         <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//         <p className="lead">
//           <Button color="primary">Learn More</Button>
//         </p>
//       </Jumbotron>
//     </div>
//   );
// };
// }
//     render(){
//         return(
//             <Jumbotron fluid>
//   <Container>
//     <h1>Fluid jumbotron</h1>
//     <p>
//       This is a modified jumbotron that occupies the entire horizontal space of
//       its parent.
//     </p>
//   </Container>
// </Jumbotron>
//         );
//     }
// }

    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
          <div className="item">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://fullcircle.asu.edu/wp-content/uploads/2017/11/FIRST-Robotics-Competition-2017-JH3915w.jpg"
              alt="First slide"
            //   max-height="400px"
              
            />
            <Carousel.Caption>
              <h3>ROBOTICS</h3>
              <p>Discover your passion with clubs like FIRST Robotics</p>
              <Link to="/login" className='btn btn-primary'>Lets go!</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1549233002-efac6fe071fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              alt="Second slide"
            //   height="300px"
            />
  
            <Carousel.Caption>
              <h3>JAM OUT</h3>
              <p>Find bands in your area that play your type of music</p>
              
              <Link to="/login" className='btn btn-primary'>Lets go!</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1524002190054-c318be445d16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              alt="Third slide"
            //   height="400px"
            />
  
            <Carousel.Caption>
              <h3>COMPEITIONS</h3>
              <p>
               Challenge yourself with hundreds of comeptitive teams and meetups
              </p>
              
              <Link to="/login" className='btn btn-primary'>Lets go!</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      );
    }
  }
  
//   render(<homepage />);

export default homepage;