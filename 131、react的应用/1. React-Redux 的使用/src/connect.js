import React from 'react'
import PropTypes from 'prop-types'

//  高阶组件
const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
  return class ConnectCompenent extends React.Component {
    static contextType = {
      stoore: PropTypes.object
    }
    
    constructor(props, context) {
      super(props, context);
      this.state = {
        props: {}     //  声明了一个叫做props的state
      }
    }

    componentDidMount() {
      const {store} = this.context;                 // 从context中拿到store对象
      store.subscribe(() => this.update());         //  订阅
      this.update();
    }

    //  每次数据有更新的时候,就会调用这个方法
    update() {
      const {store} = this.context;                               // 从context中拿到store对象
      const stateProps = mapStateToProps(store.getState());       //  把store中的全部数据传到组件内部
      const dispatchProps = mapDispatchToProps(store.dispatch);   //  把store.dispatch传到组件内部

      //  调用setState触发组件更新
      this.setState({
        props: {
          ...this.state.props,
          ...stateProps,
          ...dispatchProps
        }
      })
    }

    render() {
      return <WrapComponent {...this.state.props}></WrapComponent>
    }
  }
} 

export default connect;