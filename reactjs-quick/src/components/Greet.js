import React from 'react';

// Destructuring Props either from the parameter or the variable
// props = {name, heroName}
const Greet = (props) => {
    const {name, heroName} = props;
    //Use of JSX which is a syntactic sugar for programming
    return (
        <div className='dummyClass' id='sure'>
            {/* <h1>Todo List</h1>
            <p>For keeping and taking notes of your daily activities. Plan Effectively, 2020</p> */}
            <h1>Hello {name} a.k.a {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
    //Without JSX
    // return React.createElement('div',{id: 'sure', className: 'dummyClass'},
    // React.createElement('h1', null, 'Todo List'),
    // React.createElement('p', null, 'For Keeping and taking notes of your daily activities. Plan Effectively, 2020'))
}




export default Greet



// export default Greet;