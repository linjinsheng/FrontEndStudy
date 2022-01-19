import React, {Component} from 'react'

/*
应用的根组件
 */
export default class App extends Component {
  state = {
    num: 0
  };

  onClick = ()=>{
    //  异步
    console.log('更新前, num---',this.state.num);
    this.setState({
      num: this.state.num + 1
    })
    console.log('更新后, num---',this.state.num);

    // //  同步
    // console.log('setTimeout----更新前, num---',this.state.num);
    // setTimeout(()=>{
    //   this.setState({
    //     num: this.state.num + 1
    //   })
    //   console.log('setTimeout----更新后, num---',this.state.num);
    // }, 0)
  }
  
  render() {
    const {num} = this.state;
    return(
      <div>
        <p>{num}</p>
        <button onClick={this.onClick}>+1</button>
       </div> 
    )
  }
}
