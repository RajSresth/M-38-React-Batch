import { useState, useEffect } from "react";

const Demo1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Demo1 useEffect");
    return () => {
      console.log("Demo1 cleanup");
    };
  });

  console.log("Demo1 Render");
  return (
    <div className="demo1">
      <h1>Demo-1 Component</h1>
      <h2>Count: {count}</h2>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Demo1;
