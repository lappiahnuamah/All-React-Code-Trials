import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Counter</button>
        </div>
    )
}

export default Child
