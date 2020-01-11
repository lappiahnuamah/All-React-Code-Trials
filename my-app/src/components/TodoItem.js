import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icons">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </span>
                </div>
            </li>
        )
    }
}

export default TodoItem
