import React, { Component } from 'react';

export default class Checked extends Component {
    constructor(props){
        super(props);
        this.state = {
            // text: 'Whatever be the case',
            checked: true,
        };
        this.handleChange = this.handleChange.bind(this);
        // this.edit = this.edit.bind(this);
        // this.remove = this.remove.bind(this);
    }
    // edit(){
    //     this.setState({
    //         text: 'I am here',
    //     });

    // }
    // remove(){
    //     alert('Must be removed');
    // }

    handleChange(){
        this.setState({
            checked : !this.state.checked,
        })
    }

    render() {
        let msg;
        // if(this.state.checked){
        //     msg='checked';
        // }else {
        //     msg= 'unchecked';
        // }
            (this.state.checked) ? msg='checked' : msg = 'unchecked'
        return (
            <div>
                <input type="checkbox" onChange={this.handleChange} defaultChecked={this.state.checked}/>
                <h4>Checked box is {msg}</h4>
            </div>
        )
    }
}
