import { useEffect, useState } from "react";
import Demo1 from "./Topic-11 Advance useEffect/Demo1";
import Demo2 from "./Topic-11 Advance useEffect/Demo2";

const App = () => {
  const [count,setCount] = useState(0);

  useEffect(() => {
    console.log("App useEffect");

    return ()=> {
       console.log("App cleanup");
    }
  })

  console.log("App Render");

  return (
    <div id="app-component">
        <h1>App Component</h1>
      <div className="top">
        <h2>Count:{count}</h2> 
        <button className="btn" onClick={()=>setCount(count+1)}>Add</button>
      </div>
      <div id="app-contianer">
        <Demo1/>
        <Demo2/>
      </div>
    </div>
  );
};

export default App;
