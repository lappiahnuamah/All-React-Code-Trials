import React, { Component } from 'react';
import { Navbar, Nav}  from 'react-bootstrap';
import Profile from '../containers/Profile';
import Slider from '../containers/Slider';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab : 'profile'
    };
  }


  render(){


  return (

    <div>
   <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">My Github Profile</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link eventKey={1} href="#" onClick={()=>this.setState({currentTab:'profile'})}>Profile</Nav.Link>
      <Nav.Link eventKey={2} href="#" onClick={()=>this.setState({currentTab:'slider'})}>Slider</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>    
<div>
  {this.state.currentTab==='slider' ? <SimpleSlider />: false}
  {this.state.currentTab==='profile' ? <Profile />: false}
</div>

</div>
  );

  }
}


export default App;
