import React, { Component } from 'react'
import {Table} from 'react-bootstrap'

class Work extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
      
             increment: null,
             index: null,
             ID: null,
             Item: null,
             time: new Date
        }
        this.newStart = this.newStart.bind(this);
        // this.newEnd = this.newEnd.bind(this);
        // this.earliestSort = this.earliestSort.bind(this);
        // this.latestSort = this.latestSort.bind(this);
    }

    newStart(){
        this.setState({
            increment: this,
            index:0 ,
            ID: this.state.index +1,
            Item: this.state.index+1,
            time: this.state.time.getTime
        })
    }

    
    render() {
        return (
            <div>
                <div>Key=index</div>
                <div>
                    <button onClick={this.newStart}>Add New to Start</button>
                    {/* <button onClick={this.newEnd}>Add New to End</button>
                    <button onClick={this.earliestSort}>Sort by Earliest</button>
                    <button onClick={this.latestSort}>Sort by Latest</button> */}
                </div>
                <div>
                    <Table>
                        <tr>
                            <th>Index</th>
                            <th>ID</th>
                            <th>Item</th>
                            <th>Created at</th>
                        </tr>
                        <tr>
                            <td>{this.state.index}</td>
                            <td>{this.state.ID}</td>
                            <td>{this.state.Item}</td>
                            <td>{this.state.time}</td>
                        </tr>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Work
