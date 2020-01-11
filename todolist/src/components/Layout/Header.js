import React from 'react'
import {Link } from 'react-router-dom';

export default function header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/" style={LinkStyle} >Home</Link> |  
            <Link to="/about" style={LinkStyle} >About</Link> 
        </header>
    )
}

const LinkStyle = {
    color: '#fff',
    textDeoration: 'none',
    padding : '5px'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
}