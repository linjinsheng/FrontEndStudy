import React, { useState, useMemo } from 'react';
//  没有新的对象，就没有新的内存地址，那么Child就不会重新render
//  useMemo是缓存值的
const Child = ({data}) =>{
    console.log('child render...', data.name)
    return (
        <div>
            <div>child</div>
            <div>{data.name}</div>
        </div>
    );
}

const UseMemoHook = () => {
    console.log('Hook render...')
    const [count, setCount] = useState(0);
    const [name, setName] = useState('rose');

    const data = useMemo(() => {
        return {
            name
        }
    }, [name]);

    return(
        <div>
            <div>
                {count}
            </div>
            <button onClick={()=>setCount(count+1)}>update count</button>
            <button onClick={()=>setName('jack')}>update name </button>
            <Child data={data}/>
        </div>
    )
}

export default UseMemoHook;