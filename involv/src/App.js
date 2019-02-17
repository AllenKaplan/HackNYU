import React from 'react';
// import logo from './logo.svg';
import Login from './Login.js'
import Interests from './Interests.js'
import reactDOM from 'react-dom';
import './format.scss';
import home from './home.js'
import {Router, Route, browserHistory, Redirect} from "react-router"
import homepage from './homepage.js'
//this.props.router.push('/login')



class App extends React.Component {
  redirect(){
    return <Redirect to="/login"/>
  }

  render() {
    return (
<Router history={browserHistory}> 
        <Route path={"login"} component={Login} />

        <Route path={"home"} component={home} />
        <Route path={"/"} component={homepage} />
        <Route path={"interests"} component={Interests} />
      </Router>

    );

    
   
  }
}
// app.get('formating.css', function(req, res){ res.send('formating.css'); res.end(); });
//    ;


reactDOM.render(
    <App />, document.getElementById("root"));
export default App;
