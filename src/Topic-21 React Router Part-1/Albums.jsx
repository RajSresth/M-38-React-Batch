import React from "react";
import { useLoaderData } from "react-router-dom";

const Albums = () => {
  const albums = useLoaderData();
  console.log("Albums Render",albums);
  return (
    <div className="albums">
      <h1>Welcome to Albums Page</h1>
    </div>
  );
};

export default Albums;
