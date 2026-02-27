import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [singleResponse, setSingleResponse] = useState("");   // singleResponse = "", {}

  const {id} = useParams();   
  console.log(id);

  useEffect(() => {

    const getSingleUser = async () => {
      const response = await fetch(`https://api.github.com/users/${id}`);
      const data = await response.json();
      console.log("data:", data);
      setSingleResponse(data);
    };
    
    getSingleUser();
  }, []);

  return !singleResponse ?<h1>Loading......!</h1> :(
    <div>
      <h1>User Page</h1>
      <h2>Id:{singleResponse.login}</h2>
      <h2>Name:{singleResponse.name}</h2>
      <img src={singleResponse.avatar_url} alt="" />
    </div>
  )
};

export default User;


