import React, { useState, useEffect } from 'react';
     
function UseEffectDemo(){
    const [count, setCount] = useState(0);
    
    const btnClick = () => {
        setCount(count + 1);
    }
 
    useEffect(() => {
        console.log('执行了useEffect');
        document.title = `点击了{count}次`
    })
 
    return (
    <div>
        <p>点击{count}次</p>
        <button onClick={() => { btnClick()}}>点击</button>
    </div>
    )
}

export default UseEffectDemo;