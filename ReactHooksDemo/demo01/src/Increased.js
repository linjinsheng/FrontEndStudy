import React, { Component } from 'react';
class Increased extends Component {
    constructor (props) {
        super(props);
        this.state = {count:0 };
    }
    render() {
        return (
            <div>
                <p>总数: {this.state.count} times</p>
                <button onClick={this.add.bind(this)}>增加</button>
            </div>
        );
    }
    add(){
        this.setState({count:this.state.count+1});
    }
}

export default Increased;