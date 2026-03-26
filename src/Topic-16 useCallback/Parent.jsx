import { useState, useMemo, useCallback } from "react";
import Child from "./Child";
import Button from "./Button";

const Parent = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  console.log("1. Parent Render");

  // const heavyCalculation = () => {

  //             let sum = 0;
  //             for(let i = 0; i<= 10000000; i++)
  //             {
  //                 sum = sum + i
  //             }

  //             for(let j = 0; j<= 10000000; j++)
  //             {
  //                 sum = sum + j
  //             }

  //             return sum;
  //         }

  // const result = useMemo(() => {
  //     console.log("Use Memo-1 []")
  //     return heavyCalculation()
  // }, []);

  // const user = useMemo(() => {
  //         console.log(`Use Memo-2 [count=${count}]`)
  //      return {username: "Shaktimaan", age: 101}
  //     } , [count]);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, []);

  useMemo(() => {
    return value;
  }, []);

  useCallback(fn, []);

  // handleClick = 01a1
  // handleClick = 01a1

  return (
    <div>
      <h2>Parent Component</h2>
      <input
        type="text"
        value={text}
        placeholder="Enter your text"
        onChange={(e) => setText(e.target.value)}
      />
      <h3>Count: {count}</h3>

      <Button fn={handleClick} />
      {/* button fn = (01a1) ()=>{} */}
      {/* button fn = (01a1) ()=>{} */}

      {/* <Child result={result} user={user} /> */}
      {/* child result = 10000001000000  user = 01x1  {username: "Shaktimaan", age: 101} */}
      {/* child result = 10000001000000  user = 01x1  {username: "Shaktimaan", age: 101} */}
      {/* child result = 10000001000000  user = 02x2  {username: "Shaktimaan", age: 101} */}

      {/* <Child count={count} result={result} user={user} /> */}
      {/* child  count = 0 , result=100000010000000 , user = 01x1 {username: "Shaktimaan", age: 101}*/}
      {/* child  count = 0 , result=100000010000000 , user = 01x1 {username: "Shaktimaan", age: 101}*/}
      {/* child  count = 1 , result=100000010000000 , user = 01x1 {username: "Shaktimaan", age: 101}*/}
    </div>
  );
};

export default Parent;

/**
Hooks = [
    {
        type: 'memo',
        callbackFn: () => {},
        memoizedvalue: 100000010000000, (String, Number, Boolean, Array, object)
        newDeps: [],
        prevDeps: null
    },
    {
        type: 'callback',
        callbackFn: () => {},
        memoizedvalue: f(){},
        newDeps: [],
        prevDeps: null
    }
]
     */
