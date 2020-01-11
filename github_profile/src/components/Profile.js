import React, { Component } from 'react';
import {Form, Button, InputGroup}  from 'react-bootstrap';

class Profile extends Component  {

  constructor(props){
    super(props);
    this.state = {
     userInfo : {},
     editing : false
    };
  }
  
  componentDidMount () {
    this.state.fetchProfile();
  }

  componentsWillReceiveProps(nextProps) {
    this.setState({userInfo:this.nextProps.userInfo})
  }

updateValue(type, event){
  var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
  userInfoCopy[type] = event.target.value;
  this.setState({userInfoCopy});
}
  render() {
 
  return (
  
    <div className="container">
 <Button variant="outline-primary" onClick={()=>this.setState({editing: !this.state.editing})}>Edit</Button>
 <hr />
      {this.state.editing ?
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              value={this.state.userInfo.name}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'name')}
            />
          </InputGroup>

          <Form.Label>Bio</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              value={this.state.userInfo.bio}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'bio')}
            />
          </InputGroup>

          <Form.Label>Company</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              value={this.state.userInfo.company}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'company')}
            />
          </InputGroup>

          <Form.Label>Location</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              value={this.state.userInfo.location}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this,'location')}
            />
          </InputGroup>

        </Form.Group>
    //   <Button type="submit">Submit form</Button>
   :
      <div>
        <p><strong>Name:</strong>{this.state.userInfo.name}</p>
        <p><strong>Bio:</strong>{this.state.userInfo.bio}</p>
        <p><strong>Company:</strong>{this.state.userInfo.company}</p>
        <p><strong>Location:</strong>{this.state.userInfo.location}</p>
      </div>
    }
    
    </div>
  );
}
}
export default Profile;
