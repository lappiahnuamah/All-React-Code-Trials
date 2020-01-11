import React , { Component }  from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Search from './components/Search';
// import Table from './components/Table';
// import Counter from './components/Counter';
import Work from './components/Work';

const list = [
  {
  title: 'React',
  url: 'https://facebook.github.io/react/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://github.com/reactjs/redux',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  }
]

// function  NumberList(props){
//   const numbers = props.numbers;
//   const numbersmap = numbers.map(items => <li key={items.toString()}>{items}</li> );
//   return <ul>{numbersmap}</ul>
// }

// const numbers = [1,2,3,4,5,6];

// let Rectangle = class {
//   constructor(width, height){
//     this.width = width;
//     this.height = height;
//   }
// }
// console.log(Rectangle.name);

// function isSearched(searchTerm) {
//   return function(item) {
//   return !searchTerm ||
//   item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
//   }


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      list,
      searchTerm: '',
    };
    
    // this.onDismiss = this.onDismiss.bind(this);
    // this.onSearchChange = this.onSearchChange.bind(this);
  }
  
  // isSearched = (searchTerm) => (item) => 
  // !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());


  // onDismiss(id){
  //   const isNotId = item => item.objectID !== id;
  //   const updatedList = this.state.list.filter(isNotId);
  //   this.setState({ list: updatedList });
  // }

  // onSearchChange(event) {
  //   this.setState({searchTerm : event.target.value});
  // }

  render(){
    const { searchTerm, list } = this.state;
    return (
      <div >
        {/* <h1>Hello React World</h1>
        {/* <form>
        // <input type='text' placeholder='search by title' onChange={this.onSearchChange} value={searchTerm}/>
        // </form> <br />  */}
       {/* <Search value={searchTerm} onChange={this.onSearchChange}>Search</Search>
      //  <Table  list={list} pattern={searchTerm} onDismiss={this.onDismiss} isSearched={this.isSearched} /> */}
        {/* <NumberList numbers={numbers} /> */}
        {/* {this.state.width=  width} */}
        {/* <Counter />  */}
        <Work />
      </div>
    );
  }
 
}

export default App;
