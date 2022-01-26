import { React, ReactDOM, useState } from "../whichReact";

// old 1 3 2 5
// new 0 1 2 3 4

// 新增 0 4
// 复用 1 2 3
// 移动 3
export default function DiffPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="border">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <ul>
        {count % 2 == 0
          ? [1, 3, 2, 5].map((item) => <li key={item}>{item}</li>)
          : [0, 1, 2, 3, 4].map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
