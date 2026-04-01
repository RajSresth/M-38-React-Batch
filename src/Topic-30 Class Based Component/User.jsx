import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [user,setUser] = useState("");           // user = {  id: 122066418,name: "Shresth Rajput", }
  const [loading,setLoading] = useState(true);  // loading = false

  console.log("User FBC");

  useEffect(() => {
    console.log("1st useEffect")
      const fetchUser = async () => {
        const {data} = await axios.get("https://api.github.com/users/RajSresth");
        setUser(data);
        setLoading(false);
      }

      fetchUser()
    return () => {
      console.log("User Unmount")
    }
  }, [])

  useEffect(() => {
      if(loading)
      {
        return
      }
      console.log("2nd useEffect")
  },[loading])

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
      {
      loading? 
       <h1>Loading Data...</h1> :
       <>
          <h2>User - FBC</h2>
          <h3>Id: {user.id}</h3>
          <h3>Username: {user.name}</h3>
        </>
        }

    </div>
  );
};

export default User;
