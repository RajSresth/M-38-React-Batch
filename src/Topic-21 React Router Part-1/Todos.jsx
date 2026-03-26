import React from "react";
import { useLoaderData } from "react-router-dom";

const Todos = () => {
  const todos = useLoaderData();

  console.log("Todos Render",todos);

  return (
    <div className="todos">
      <h1>Welcome to Todos Page</h1>
    </div>
  );
};

export default Todos;
