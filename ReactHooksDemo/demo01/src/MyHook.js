import React, { useState, useEffect, useCallback } from 'react';
const useWinSize = () => {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    //  useCallback,目的是为了缓存方法(usemeno是为了缓存变量)
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    },[])
    useEffect(() =>{
        window.addEventListener('resize', onResize);
        return ()=>{
            window.removeEventListener('resize', onResize);
        }
    }, [])
    return size;
}
const MyHook = () => {
    const size = useWinSize();
    return (
        <div>size: {size.width}X{size.height}</div>
    )
}

export default MyHook;