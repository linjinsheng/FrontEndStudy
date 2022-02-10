import React, {useState, useMemo, useCallback} from "react";
//  用来优化子组件的渲染问题,或者监听子组件状态变化来处理问题
//  因为shouldComponentUpdate里能监听到是否变化,但没法控制其他的外部方法,只能返回true和false
//  而componentDidUpdate只能在更新后执行

const UseMemo = () => {
  const [name, setname] = useState("baby张");
  const [age, setage] = useState(18);
  return (
    <div>
      <h3>UseMeno</h3>
      <button
        onClick={() => {
          setname("baby张" + new Date().getTime());
        }}
      >
        改名字
      </button>
      <button
        onClick={() => {
          setage("年龄"+ new Date().getTime());
        }}
      >
        改年龄
      </button>
      <p>
        UseMeno {name}:{age}
      </p>
      <Child age={age} name={name}>
        {name}的children
      </Child>
    </div>
  );
};

const Child = ({age, name, children}) => {
  //  在不用useMeno做处理的时候,只要父组件状态改变了,子组件都会渲染一次,用了useMeno可以监听某个状态的
  //  name,当name变化时候执行useMeno
  console.log(age, name, children, '111111111');
  const namechange = useCallback(() => {
    return name + "change";
  }, [name]);

  //  useMeno有两个参数,和useEffect一样,第一个参数是函数,第二个参数是数组,用来监听某个状态的变化
  const changedname = useMemo(() => namechange(), [namechange]);
  return (
    <div style={{ border: '1px solid'}}>
      <p>children: {children}</p>
      <p>name: {name}</p>
      <p>changed: {children}</p>
      <p>children: {changedname}</p>
      <p>age: {age}</p>
    </div>
  )
}



export default UseMemo;
