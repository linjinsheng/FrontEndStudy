import React, { useReducer } from 'react';
/**
 * useReducer 可以让代码具有更好的可读性和可维护性,它类似于Redux中的reducer,
 * reducer这个函数接收两个参数，一个是状态，一个用来控制业务逻辑的判断参数
 */
const reducer = (state = 0, {type}) => {
    switch (type) {
        case 'add':
            return state + 1
        case 'delete':
            return state - 1
        default:
            return state
    }
}

const UseReducerHook = () => {
    const [count, dispatch] = useReducer(reducer, 0)

    return(
        <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={()=> dispatch({type:'add'})}>Add</button>
            <button onClick={()=> dispatch({type:'delete'})}>Delete</button>
        </div>
    )
}

export default UseReducerHook;