import React, { useRef } from 'react';

function UseRefDemo(){
    const InputEl = useRef(null);
    const getInputFocus = () => {
        InputEl.current.placeholder = "输入中";
        InputEl.current.focus();
    }
    return (
        <div>
            <input ref={InputEl} type="text" placeholder="请输入"/>
           <button onClick={() => getInputFocus()}>测试useRef</button>
        </div>
    )
}

export default UseRefDemo;