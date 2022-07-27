import React, { useState } from 'react';
/**
 * useState是react自带的一个hook函数，它的作用是用来声明状态变量。
 * useState这个函数接收的参数是状态的初始值，它返回一个数组，
 * 这个数组的第0位是当前的状态值，第1位是可以改变状态值的方法函数
*/ 
const IncreasedHooks = () => {
    const [ count, setCount] = useState(0); // 数组解构
    return (
        <div>
            <p>总数:{count}</p>
            <button onClick={() => setCount(count+1)}>增加</button>
        </div>
    )
}

export default IncreasedHooks;