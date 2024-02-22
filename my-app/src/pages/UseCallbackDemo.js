import React, { useState, useCallback, useEffect } from 'react';

function UseCallbackDemo(){
    const [ count, setCount ] = useState(0);
    const [ inputVal, setInputVal ] = useState('');
    const backCount = useCallback(() => {
      return count;
    }, [count]);
    return (
      <div>
        <button onClick={() => {setCount(count + 1)}}>Click me--点击{count}次</button>
        <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        <hr/>
        <Child count={count} callback={backCount}/>
      </div>
    )
  }
   
  function Child(props){
    const {count, callback} = props;
    const [mycount, setMycount] = useState(() => callback());
    useEffect(() => {
      setMycount(callback());
    }, [callback]);
   
    return (
      <div>
        <h3>child组件</h3>
        <p>myCount---{mycount}</p>
      </div>
    )
  }

export default UseCallbackDemo;