import { useState, useEffect, useEffectEvent } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const fn = useEffectEvent(() => {
    return count;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("count:", fn());
    }, 1000);

    return () => {
      console.log("Cleanup fn");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
