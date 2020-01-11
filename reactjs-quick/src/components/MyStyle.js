import React, { Component } from 'react'
import '../index.css'

class MyStyle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prim : false
        }
        this.Change= this.Change.bind(this);
    }
    
    Change(){
        this.setState(state=> ({
            prim: !this.state.prim
        }))
    }

    
    render() {
        return (
            <div>
                <h3 className= {this.state.prim && 'prim'}>This is my spreadsheet</h3>
                <button onClick={this.Change}>Change Color</button>
            </div>
        )
    }
}

export default MyStyle
