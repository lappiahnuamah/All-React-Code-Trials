import React, { Component } from 'react';
import Greet from './components/Greet';
import { SwatchesPicker } from 'react-color';
import Counter from './components/Counter';
import Style from './components/Style'
import MyStyle from './components/MyStyle'
import './index.css'
import RefDemo from './components/RefDemo';

export default class App1 extends Component {
    // getInitialState(){
    //     return {Qty: 0};
    // }
    constructor(props){
        super(props);
        this.state= {
            Qty: 0,
            total: 0,
            background: '#fff',
            color1: '#fff',
            welcome: 'Welcome Visitor'
        };
        this.total = this.total.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.dead = this.dead.bind(this);
        this.colorChange = this.colorChange.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.onChangeWelcome = this.onChangeWelcome.bind(this);
    }

    onChangeWelcome(){
        this.setState({
            welcome: 'Thank you for subscribing',
        })
    }
   add(){
    this.setState({
        Qty: this.state.Qty + 1,
    });
    }
    
   remove(){
    this.setState({
        Qty: this.state.Qty - 1,
    });
    }

   total(){
    this.setState({
        total: this.state.Qty*19.6,
    });
    }

    dead(){
        alert('He is dead');
    }
    
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
      };

    colorChange(color) {
        this.setState({
            color1: color.hex
        });
    }
   
    render() {
        
        return (
            <div>
                
                {/* <Counter /> */}
                <Greet name='Bruce' heroName='Batman'>
                    <p>This is my role model</p>
                </Greet>
                <Greet name='Alex' heroName='Spider Man'>
                    <button onClick={this.dead}>Click here</button>
                </Greet>
                <Greet name='Diana' heroName='Wonder Woman'>
                    <button onClick={this.colorChange}>
                        Change Color
                    </button>
                    <SwatchesPicker color={ this.state.background } onChangeComplete={ this.handleChangeComplete } />
                </Greet>
                <h2>{this.state.welcome}</h2>
                <button className='btn-success' onClick={this.onChangeWelcome}>Subscribe Now!</button> 
                <Style primary ={true}/>
                {/* <MyStyle /> */}
                <RefDemo />
                {/* <h4>Android Mobile - $19.6</h4>
                <button onClick={this.add}>Add</button>
                <button onClick={this.remove}>Remove</button><br />
                <h3>Qty: {this.state.Qty} items(s)</h3>
                <button onClick={this.total}>Buy</button>
                <h3>Total: ${this.state.total}</h3> */}
            </div>
        )
    }
}
