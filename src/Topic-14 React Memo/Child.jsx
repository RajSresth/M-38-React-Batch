import { memo } from "react";

const Child = ({ user }) => {
  const { username, age } = user;

  console.log("Child Render");

  return (
    <div>
      <h1>Child Component</h1>
      <h2>Username: {username}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
};

const compare = (prev, next) => {
  const status = prev.user === next.user;
  console.log("status:", status);
  return status;
};



export default memo(Child, compare);



/**
 * compare function
 * 1. true:- skip child component
 * 2. false:- child component re-render
 */

/**
 * props = {
            user:{
              username: "Amit",
              age:21
            }
          }
 */
