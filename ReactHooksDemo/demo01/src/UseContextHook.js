import React, { useState, useContext, createContext } from 'react';
//  useContext主要用于父子组件之间的传值
const CountContext = createContext();

//  定义子组件
const Counter = () => {
    //  子组件一句话就可以得到父组件传递过来的count
    const count = useContext(CountContext);
    return (
        <h2>{count}</h2>
    )
}
//  父组件
const UseContextHook = () => {
    const [count , setCount] = useState(0);
    return (
        <div>
            <div>使用React Hooks</div>
            <p>总数: {count}</p>
            <button onClick={() => setCount(count+1)}>增加</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}

export default UseContextHook;