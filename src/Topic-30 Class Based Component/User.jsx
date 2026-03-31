import { useState } from "react";

const User = ({ username, address }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "20px",
        border: "2px solid black",
        width: "400px",
        height: "fit-content",
        gap: "10px",
        marginBlock: "25px",
      }}
    >
      <h2>User - FBC</h2>
      <h3>Username: {username}</h3>
      <h3>Address: {address}</h3>
      <h3>Count: {count}</h3>
      <button
        style={{
          padding: "10px 35px",
          border: "none",
          outline: "none",
          borderRadius: "8px",
          color: "white",
          backgroundColor: "#333",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>


      <h2>Count2: {count2}</h2>
      <button
        style={{
          padding: "10px 35px",
          border: "none",
          outline: "none",
          borderRadius: "8px",
          color: "white",
          backgroundColor: "#333",
          cursor: "pointer",
        }}
        onClick={() => setCount2(count2 + 10)}
      >
        Increase by 10
      </button>
    </div>
  );
};

export default User;
