import React, { useState } from 'react';
/**
 * useState是react自带的一个hook函数，它的作用是用来声明状态变量。
 * useState这个函数接收的参数是状态的初始值，它返回一个数组，
 * useState的初始值，只在第一次有效
*/
const Child = ({data}) =>{
    console.log('child render...', data)
    const [name, setName] = useState(data)
    return (
        <div>
            <div>child</div>
            <div>{name} --- {data}</div>
        </div>
    );
}

const UseStateHook = () => {
    console.log('Hook render...')
    const [count, setCount] = useState(0)
    const [name, setName] = useState('rose')

    return(
        <div>
            <div>{count}</div>
            <button onClick={()=>setCount(count+1)}>update count </button>
            <button onClick={()=>setName('jack')}>update name </button>
            <Child data={name}/>
        </div>
    )
}

export default UseStateHook;