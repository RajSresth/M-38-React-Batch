import axios from "axios";
import { createContext,useContext, useEffect, useState } from "react";


// 1. Store Create
const AuthContext = createContext();


// 2. Provide Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
      
        axios.get("http://localhost:3000/api/auth/refresh",{withCredentials:true})
        .then(({data})=> {
          setUser(data.user);
        })
        .catch((error)=>{
          console.log(error)
        })
        .finally(()=>{
          setLoading(false)
        })            
       
  },[])

  const login = (user) => {
    setUser(user);
  };

  const logout = async () => {
    await axios.post(
      "http://localhost:3000/api/auth/logout",
      {},
      { withCredentials: true },
    );
    setUser(null);
  };

  if(loading) return <h1>Loading...!</h1>

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//3. CUSTOM HOOK
export const useAuth = () => useContext(AuthContext);


