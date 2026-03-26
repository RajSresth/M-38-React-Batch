import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);
  // const [username,setUsername] = useState("");

  // ! ❌ Don't use usestate hook inside if,else or inside any loop
  let user;
  if (status) {
    const [username, setUsername] = useState("");
    user = username;
  }

  const handleClick = () => {
    setCount(count + 1);
    setStatus(!status);
    setUsername("Chombu Singh");
  };

  return (
    <div>
      <h1>Counter Component</h1>
      <h2>Count: {count}</h2>
      <h2>Status:{status}</h2>
      <h2>Username: {user}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Counter;
