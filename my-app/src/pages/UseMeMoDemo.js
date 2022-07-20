import React, { useState, useMemo } from 'react';

function UseMeMoDemo(){
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
    const AddSum = useMemo(() => {
      console.log('useMemo');
      let sum = count;
      for(let i = 0; i < count; i++){
        sum += i;
      } 
     return sum;
   }, [count]); // 只在count值发生变化时才重新计算值
   return (
      <div>
        <p>点击了{count}次</p>
        <p>计算求和所得{AddSum}</p>
        <button onClick={() => {setCount(count + 1)}}>Click me</button>
        <input value={value} onChange={event => setValue(event.target.value)}/>
      </div>
    )
}
export default UseMeMoDemo;