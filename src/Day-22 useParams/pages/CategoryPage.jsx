import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const CategoryPage = () => {
  const [username, setUsername] = useState("");
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams(); // searchParams = URLSearchParams { query: pharmacy}

  const handleClick = () => {
    setSearchParams((prev) => {
      return { ...Object.fromEntries(prev), username: username };
    });
  };

  return (
    <div>
      <h1>Search Query</h1>
      <h2>CategoryId:{id}</h2>
      <h2>Query:{searchParams.get("query")}</h2>
      <h2>Filter Type:{searchParams.get("filter")}</h2>
      <h2>Page:{searchParams.get("page")}</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleClick}>Set Name</button>
    </div>
  );
};

export default CategoryPage;