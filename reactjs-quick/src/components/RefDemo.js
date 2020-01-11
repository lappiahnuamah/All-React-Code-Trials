import React, { Component } from 'react'
import { element } from 'prop-types'

class RefDemo extends Component {

    constructor(props) {
        super(props)
        this.InputReft = React.createRef()
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // console.log(this.InputReft);
        // this.InputReft.current.focus()
    }

    clickHandler = () => {
        alert(this.InputReft.current.value);
    }
    
    render() {
        return (
            <div>
                <input  type='text' ref={this.InputReft}/>
                <input  type='text' ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default RefDemo
