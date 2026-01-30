import { useState } from "react";

const Counter = () => {
  // React state variable
  const [count, setCount] = useState(0);

  console.log("counter render");

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter Component</h1>
      <h2>Count:{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
