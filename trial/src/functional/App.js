import  React, {Component} from 'react';
import Container from '../containers/Container1';

// //The Functional Component
// const App = props => {
//   return (
//     <div className="App">
//     Company 1
//     </div>
//   );


class App extends Component{
names = "Alex"

constructor(props){
  super(props)
  this.state = {
    setthis : 'This is the right thing to do',
    stateprop1: 'Our Init State',
    stateprop2 : 5
  }
}

//Updating state using setState()
changeState = () => {
  this.setState({setthis:"New State"})
}
//Updating using the reference type
/*
changeState1 = () => (
  this.setState((prevState, props)=>({
    stateprop2: prevState.stateprop2 +1
  })

  ))
*/
//Method 2 of updating with references
changeState1 = ()=>(
  this.setState({stateprop2: this.state.stateprop2 +1,
                stateprop1: this.state.stateprop1 +'L'}
    ))

    changeState2 = ()=>(
      this.setState({stateprop1: this.state.stateprop1 +'L'}
        ))
 
  render(){

    const name = 'Tell'
    return (
      
    <div className="App">
      {name}
      {this.names}
      <div>
        <button onClick={()=>this.changeState()}>
        Change State
        </button>
        {this.state.setthis}
        <br />
        <button onClick={()=>this.changeState1()}>changeState1</button>
        {this.state.stateprop2}
        <br />
        <button onClick={()=>this.changeState2()}>changeState2</button>
        {this.state.stateprop1}
      </div>

      {true 
      ? false ? <div>Condition 1</div> : <div>Condition 2</div>
      : true ? <div>Condition 3</div> : <div>Condition 4</div>
    }
    <Container />
    </div>
    );
  }
}

export default App;
