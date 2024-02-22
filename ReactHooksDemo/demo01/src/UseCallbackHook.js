import React, { useState } from 'react';
//  useCallback 是缓存函数的
const Child = ({data, onChange}) =>{
    console.log('child render...', data.name)
    return (
        <div>
            <div>child</div>
            <div>{data}</div>
            <input type="text" onChange={onChange}/>
        </div>
    );
}

const UseCallbackHook = () => {
    console.log('Hook render...')
    const [count, setCount] = useState(0);
    const [name, setName] = useState('rose');
    const [text, setText] = useState('');

    const onChange=(e)=>{
        setText(e.target.value);
    }


    return(
        <div>
            <div>count: {count}</div>
            <div>text: {text}</div>
            <button onClick={()=>setCount(count+1)}>count+1</button>
            <button onClick={()=>setName('jack')}>update name </button>
            <Child data={name} onChange={onChange}/>
        </div>
    )
}

export default UseCallbackHook;