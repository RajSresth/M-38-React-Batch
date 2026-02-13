import { useState, useMemo } from "react";
import Child from "./Child";
import "./style.css";

const Parent = () => {
  const [status, setStatus] = useState(false);
  const [count, setCount] = useState(0);

  console.log("Parent Render");

  return (
    <div id="parent-component">
      <h1>Parent Component</h1>

      <div className="toggle-container">
        <button onClick={() => setStatus(!status)}>
          {status ? "Hide" : "Show"}
        </button>
        <p className={status ? "show" : "hide"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum
          tempore similique facere ut, sint magnam asperiores odio praesentium
          deleniti, cum enim nostrum. Reiciendis iure aperiam blanditiis cum
          porro ad quam neque enim perspiciatis perferendis vel earum molestiae,
          labore magnam!
        </p>
      </div>

      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>

      <Child
        user={useMemo(() => {
          return { username: "Tinku" };
        }, [])}
      />
    </div>
  );
};

export default Parent;
