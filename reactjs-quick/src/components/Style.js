import React from 'react'
import '../index.css'

function Style(props) {
    let className = props.primary && 'primary'
    return (
        <div>
            <h3 className={className}>My StyleSheets</h3>
            <button onClick={this}>Change</button>
        </div>
    )
}

export default Style
