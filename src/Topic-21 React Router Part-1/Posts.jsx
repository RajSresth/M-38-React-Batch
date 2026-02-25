import React from "react";
import { useLoaderData } from "react-router-dom";

const Posts = () => {
  const posts = useLoaderData();
  console.log("Post Render",posts);
  return (
    <div className="posts">
      <h1>Welcome to Posts Page</h1>
    </div>
  );
};

export default Posts;
