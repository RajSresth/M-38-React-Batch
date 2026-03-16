import { useContext, useState } from "react";
import style from "./Login.module.css";
import axios from "axios"

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Topic-24 Browser Router and ContextAPI/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)

  const handleFormSubmit = async (e) => {
    try{
        e.preventDefault();

          const {data} = await axios.post(
            "http://localhost:3000/api/auth/login",
            { email, password },
            { withCredentials: true },
          );

          console.log("data:",data);

          
            login(data.user)
            navigate("/", {
              replace: true})
          
  }
  catch(error){
      console.log(error.response.data); 
  } 
};
       
              



  return (
    <div className={style["form-container"]}>
      <form action="" className={style.form} onSubmit={handleFormSubmit}>
        <h2>Login Page</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <button type="reset">Cancel</button>
      </form>
    </div>
  );
};

export default Login;
