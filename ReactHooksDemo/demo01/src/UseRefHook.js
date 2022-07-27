import React, { useRef } from 'react';
/**
 * 用useRef获取React JSX中的DOM元素，获取后你就可以控制DOM的任何东西。
 * 用useRef来保存变量，
 */
const UseRefHook = () => {
    //  声明一个input的element
    const inputEl = useRef(null);
    const onButtonClick=()=>{
        inputEl.current.value = "Hello world!";
        console.log(inputEl);
    }

    return(
        <>
            <input ref={inputEl} type="text"></input>
            <button onClick={onButtonClick}>在input上展示文字</button>
        </>
    )
}

export default UseRefHook;