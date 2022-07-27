import React, { useState, useEffect } from 'react';
/**
 * useEffect可以用来代替我们常用的声明周期函数
 * 做"副作用"的业务处理 代替了componentDidMount和componentDidUpdate
*/


const UseEffectHook = () => {
    const [count, setCount ] = useState(0);
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)

        return ()=> {
            console.log('===================')
        }
    }, [count])
    //  解决生命周期函数 代替了componentDidMount和componentDidUpdate。
    //  分别在组件第一次渲染后在浏览器控制台打印出计数器结果和在每次计数器状态发生变化后打印出结果
    return (
        <div>
            <div>使用React Hooks</div>
            <p>总数:{count}</p>
            <button onClick={() => setCount(count+1)}>增加</button>
        </div>
    )
}

export default UseEffectHook;