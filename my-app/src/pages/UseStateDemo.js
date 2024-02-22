import React, { useState } from 'react';

/**
 * https://www.freesion.com/article/14581144369/
 */
function UseStateDemo(){
    // 声明一个count的state变量
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>点击{count}次</p>
            <button onClick={() => setCount(count + 1)}>点击</button>
        </div>
    )
}

export default UseStateDemo;