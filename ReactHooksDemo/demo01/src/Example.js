import React, { Component } from 'react';
class Example extends Component {
    constructor (props) {
        super(props);
        this.state = {count:0 };
    }
    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.addCount.bind(this)}>Click me</button>
            </div>
        );
    }
    addCount(){
        this.setState({count:this.state.count+1});
    }
}

export default Example;