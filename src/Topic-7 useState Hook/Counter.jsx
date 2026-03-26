import { useState } from "react";
import Button from "./Button";
import User from "./User";

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log("Counter Component Render");
  
  const increment = () => {
    setCount(count => count + 1);
  }

  return (
    <div id="counter-component">
      <h1>Counter Component</h1>
      <h2>Count: {count}</h2>
      <Button  text="Increment"  increment={increment}/>
      <User/>
    </div>
  );
};

export default Counter;
