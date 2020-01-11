import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.Completed ?
            'line-through' : 'none'
        }
        // if(this.props.todo.completed){
        //     return{
        //         textDecoration: 'line-through'
        //     }
        // }else {
        //     return{
        //         textDecoration: 'none'
        //     }
        // }
    }

 // Either u use the arrow function or the this.markComplete.bind(this)
//  markComplete = (e) => {
//      console.log(this.props )
//  }
    render() {
        const {id, title} = this.props.todo;
        return  (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this , id)} /> {' '}                   
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                    </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4 '
// }

const btnStyle = {
    background: '#ff0000',
    color : '#fff',
    padding: '5px 7px',
    cursor: 'pointer',
    float: 'right',
    border: 'none',
    borderRadius: '50%'

}
export default TodoItem;
