import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state ={
            editing: false,
        }
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
    }

    edit(){
        this.setState({
            editing: true,
        });
    }

    remove(){
        this.props.removeCommentText(this.props.index);
    }
    save(){
        // const val = this.refs.newText.value;
        this.props.updateCommentText(this.refs.newText.value, this.props.index);
        this.setState({
            editing: false,
        });
    }

    renderNormal(){
        return (
            <div className='content'>
                <div className='subContent'>{this.props.children}</div>
                <button onClick={this.edit} className='btn-primary'>Edit</button>
                <button onClick={this.remove} className='btn-danger'>Remove</button>
            </div>
        )
    }

    renderForm(){
        return (
            <div className='content'>
                <textarea defaultValue={this.props.children} ref='newText'></textarea>
                <button onClick={this.save} className='btn-success'>Save</button>
            </div>
        )
    }

    render() {
            // if (this.state.editing){
            //     return this.renderForm();
            // }else {
            //     return this.renderNormal();
            // }

            return (
                (this.state.editing)? this.renderForm() : this.renderNormal()
            )
    }
}
