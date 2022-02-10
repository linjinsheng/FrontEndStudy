import React, { useState, useEffect, useLayoutEffect} from "react";
import { UseState } from "..";

//  箭头函数的写法,改变状态
const UseEffect = props => {
  //  创建了一个叫hook的变量,sethook方法可以改变这个变量,初始值为‘react hook 是真的好用啊’
  const [hook, sethook] = useState("react hook 是真的好用啊");
  const [name] = useState("baby张");
  return (
    <header className="UseEffect-header">
      <h3>UseEffect</h3>
      <Child hook={hook} name={name}>
        <button
          onClick = {()=>{
            sethook("我改变了react hook的值" + new Date().getTime());
          }}
        >
          改变hook
        </button>
      </Child>
    </header>
  );
};

const Child = props =>{
  const [newhook, sethook] = useState(props.hook);
  useEffect(() => {
    console.log("first componentDidMount");
  }, []);

  useEffect(() => {
    setnewhook(props.hook + '222222');
    console.log("useEffect");
    return () => {
      console.log("componentWillUnmount");
    };
  }, [props.hook]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    return () => {
      console.log("useLayoutEffect componentWillUnmount");
    };
  }, [props.hook]);

  return (
    <div>
      <p>{props.name}</p>
      {newhook}
    </div>
  );
};

export default UseEffect;

