import React, { Component } from 'react';
import Todo from './Todo';
import Greet from './components/Greet';
import Work from './components/Work';
// import Table from 'reactstrap'

export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [
                'I like her',
                'I have to go to the market',
                'Ok, enough comments'
            ]
        }
        // this.updateComment = this.updateComment.bind(this);
        // this.removeComment = this.removeComment.bind(this);
        // this.eachComment = this.eachComment.bind(this);
        // this.addComment = this.addComment.bind(this);
    }

    // addComment(text){
    //     let arr =this.state.comments;
    //     arr.push(text);
    //     this.setState({comments: arr});
    // }
    // removeComment(i){
    //     let arr =this.state.comments;
    //     arr.splice(i,1);
    //     this.setState({comments: arr});
    // }

    // updateComment(newComment, i){
    //     let arr =this.state.comments;
    //     arr[i] = newComment;
    //     this.setState({comments: arr});
    // }
    // eachComment(text,i) {
    //     return (
    //         <Todo key={i} index={i} updateCommentText={this.updateComment} removeCommentText={this.removeComment}>
    //             {text}
    //         </Todo>
    //     );
    // }
    render() {
        return (
            <div>
                <Work />
                {/* <Greet />
                <button onClick={this.addComment.bind(this, "Default Text")} className='btn-info'>Add New</button>
                <div className='content'>
                    {this.state.comments.map(this.eachComment)}
                </div> */}
            </div>
          
        )
    }
}
