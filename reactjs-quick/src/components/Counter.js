import React, { Component } from 'react'
import Child from './Child';

class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: 'Parent',
        }
        this.greetParent = this.greetParent.bind(this);
    }
    
    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=> {
        //     console.log('Call back Function: ' + this.state.count);
        // })

        this.setState(prevState=>({
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    greetParent(Child){
        alert(`Hello Counter ${this.state.name} from ${Child}`);
    }

    render() {
        return (
            <div>
                <h2>Increment of Five</h2>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.incrementFive()}>Increment</button>
                <Child greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default Counter