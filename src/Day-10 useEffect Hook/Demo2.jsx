import { useState, useEffect } from "react";

const Demo2 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {

    console.log("useEffect Call");

    return () => {
      console.log("Cleanup Func call..!!");
      
    }

  },[count2]);

  console.log("Demo2 Render");

  

  return (
    <div>
      <h1>Demo2 Component</h1>
      <h2>Count1: {count1}</h2>
      <button onClick={() => {setCount1(count1 + 1)}}>Count1</button>

      <h2>Count2: {count2}</h2>
      <button onClick={() => {setCount2(count2 + 10)}}>Count2</button>
    </div>
  );
};

export default Demo2;