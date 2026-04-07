import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState(""); 
  const [loading, setLoading] = useState(true); 

  // Mounting Phase useEffect
  useEffect(() => {
    const controller = new AbortController();

    const getUser = async () => {
      try {
        const {data} = await axios.get( `https://api.github.com/users/RajSresth?t=${Date.now()}`,  // ✅ No extra headers needed
        {
          signal: controller.signal,
        });
   
        console.log("data:",data);
        setUser(data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error))
        {
          console.log("Request is Cancelled by the user");
        }
         else {
          console.log("Fetch error:", error.name); 
          console.log("Status:",error.response?.status);
        }
      }
    };

    getUser();
 
    return  () => {
          console.log("User Cleanup")
          controller.abort();
    }
  }, []);

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
      {loading ? (
        <h1>Loading Data...</h1>
      ) : (
        <>
          <h2>User - FBC</h2>
          <h3>Id: {user.id}</h3>
          <h3>Username: {user.name}</h3>
        </>
      )}
    </div>
  );
};

export default User;
