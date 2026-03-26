import React, { useState } from "react";

//seeing comparision between js variable and react variable(state)
// const Counter = () => {

//     let countJs = 0  // This was JS variable and thats why it was not updating the UI whenever our count value was changing so to update the UI too we need to use state so that component can reload whenever count value changes and the UI gets updated too

//     const incrementCountJs = () => {
//         console.log("Clicked");
//         countJs=countJs+1
//         console.log("CountJs:",countJs);

//     }

//     const [countReact,setReactCount] = useState(0)  // React state variable

//     const incrementCountReact = () => {
//         console.log("React count clicked");
//         setReactCount(countReact+1)
//         console.log("CountReact:",countReact);

//     }

//   return (
//     <div>
//         <h1>Counter Component</h1>
//         <h2>CountJs: {countJs} </h2>
//         <h2>CountReact: {countReact} </h2>
//         <button onClick={incrementCountJs}>Increment Js Count</button>
//         <button onClick={incrementCountReact}>Increment React Count</button>
//     </div>
//   )
// }

// export default Counter

// const Counter = () => {

//     const [count,setCount] = useState(0)
//     console.log("React counter conponent render");

//     const incrementCount = () => {
//         console.log("React increment buttin clicked");
//         // setCount(count+1)
//         // setCount((count) => count+1)
//         setCount((prev) => {
//           console.log("prev1 before:",prev);
//           prev=prev+1
//           console.log("prev1 after:",prev);

//           return prev
//         })
//         setCount((prev) => {
//           console.log("prev2 before:",prev);
//           prev=prev+1
//           console.log("prev2 after:",prev);
//           return prev
//         })
//         console.log("Count:",count);
//     }

//   return (
//     <div>
//         <h1>Counter Component</h1>
//         <h2>CountReact: {count} </h2>
//         <button onClick={incrementCount}>Increment React Count</button>
//     </div>
//   )
// }

// export default Counter

//same in few lines
// const Counter = () => {

//     const [count,setCount] = useState(0)
//     console.log("React counter conponent render");

//     const incrementCount = () => {
//         console.log("React increment buttin clicked");

//         // setCount((prev) => prev=prev+1)  //count=prev
//         setCount((count) => count=count+1)
//         setCount((prev) => prev=prev+1)
//         console.log("Count:",count);
//     }

//   return (
//     <div>
//         <h1>Counter Component</h1>
//         <h2>CountReact: {count} </h2>
//         <button onClick={incrementCount}>Increment React Count</button>
//     </div>
//   )
// }

// export default Counter

// more than one state in same button  (here in this case component re-render once and usme hi teeno state change ho rha h )
// const Counter = () => {

//     const [count,setCount] = useState(0)
//     const [username,setUsername] =useState("")
//     const [age,setAge] =useState(0)

//     console.log("Counter Component Render");

//     const handleClick = () => {
//         console.log("React increment buttin clicked");
//         setCount((count) => count=count+1)
//         setUsername("Hemant Kumar")
//         setAge(18)
//     }

//   return (
//     <div>
//         <h1>Counter Component</h1>
//         <h2>CountReact: {count} </h2>
//         <h2>username: {username} </h2>
//         <h2>Age: {age} </h2>
//         <button onClick={handleClick}>Increment React Count</button>
//     </div>
//   )
// }

// export default Counter

// more than one state in same button (here in this case component re-render thrice and usme ek-ek krke teeno state change ho rha h )
// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [username, setUsername] = useState("");
//   const [age, setAge] = useState(0);

//   console.log("Counter Component Render");

//   return (
//     <div>
//       <h1>Counter Component</h1>
//       <h2>CountReact: {count} </h2>
//       <h2>username: {username} </h2>
//       <h2>Age: {age} </h2>
//       <button onClick={() => setCount((count) => (count = count + 1))}>
//         Increment React Count
//       </button>
//       <button onClick={() => setUsername("Hemant Kumar")}>Username</button>
//       <button onClick={() => setAge(18)}>Age</button>
//     </div>
//   );
// };

// export default Counter;


//with Button component and user component
import Button from "./Button";
import User from "./User";

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log("Counter Component Render");

  const increment = () => {
    setCount(count=> count+1)
  }

  return (
    <div>
      <h1>Counter Component</h1>
      <h2>Count: {count} </h2>
      <Button text={"Increment"} increment={increment}/>
      <User/>
    </div>
  );
};

export default Counter;
















