import  React, {Component} from 'react';
// import App from '../functional/App';

import * as ACTION_TYPES from '../stores/actions/action_types';
import * as ACTIONS from '../stores/actions/actions';

import {connect} from 'react-redux';

// //The Functional Component
// const App = props => {
//   return (
//     <div className="App">
//     Company 1
//     </div>
//   );


class Container1 extends Component{
  /*
Working with List -- Pleae take note of this
  Arr1 = [
    {id:1, text: 'text 1', number: 1},
    {id:2, text: 'text 2', number: 2},
    {id:3, text: 'text 3', number: 3},
    {id:4, text: 'text 4', number: 4},
    {id:5, text: 'text 5', number: 5}
  ]

  RenderListItem = (props) => (
    <div>
      {props.item.text}
      <p>{props.item.number}</p>
    </div>
  )


constructor(props){
  super(props)
  
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit= this.handleSubmit.bind(this)
}

    state = {
      value : ''
    }

    // handleChange = (event)=> (
    //   // console.log(event.target.value)
    //   this.setState({ value: event.target.value})
    // )

    handleChange (event) {
      // console.log(event.target.value)
      this.setState({ value: event.target.value})
    }
      
    
    // handleSubmit = (event) => {
    //   event.preventDefault()
    //   // console.log(event.target.name.value)
    //   console.log(this.state.value)
    // }

    handleSubmit(event) {
      event.preventDefault()
      // console.log(event.target.name.value)
      console.log(this.state.value)
    }
*/
  render(){
    const user_text = "text 1"

    return (
  /*
    <div className="App">
      {this.Arr1.map((item,index) => (< this.RenderListItem key={item.id} item={item} />))}
    </div>

    <div>
      {this.state.value}
      <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input id="name" type='text' onChange={this.handleChange} />
          <button type='submit' >Submit</button>
      </form>
    </div>
    */
   <div>
     <button onClick={() => console.log(this.props.stateprop1)}>Get Store</button>
     <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
     <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
     <button onClick={() => this.props.action_creator1()}>Dispatch Action 1 Craeator 1</button>
     <button onClick={() => this.props.action_creator2()}>Dispatch Action 2 Creator 2</button>
     <button onClick={() => this.props.action_creator3(user_text)}>Dispatch Action 2 Creator 3</button>
     {this.props.stateprop1  ? <h1>{this.props.stateprop1}</h1> :null}
   </div>
    )
  }
}

function mapStateToProps(state){
  return {
    stateprop1: state.user_text
  }
}

function mapDispatchToProps(dispatch){
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
    action_creator3: (text) => dispatch(ACTIONS.user_input())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);
