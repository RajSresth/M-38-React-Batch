import {  useState } from "react";
import style from "./Login.module.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../Topic-28 Zustand/authStore";


const Login = () => {
  console.log("Login Render")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false)


  const navigate = useNavigate();
  const login = useAuthStore((state)=> state.login)

  const handleFormSubmit = async (e) => {
    try{
        e.preventDefault();

          const {data} = await axios.post(
            "http://localhost:3000/api/auth/login",
            { email, password },
            { withCredentials: true },
          );
          console.log("data:",data);

            login(data.user);
            navigate("/", {replace: true})             
          
  }
  catch(error){
      console.log(error.response.data); 
  } 
};
       
              
  const showPassword = () => {
    setShow(!show); 
  }


  return (
    <div id="login-component" className={style["form-container"]}>
      <form action="" className={style.form} onSubmit={handleFormSubmit}>
        <h2>Login Page</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {show ? <input
          type="text"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />:
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />}

        <button type="button" onClick={showPassword}>
          {show? "Hide": "Show"}
        </button>
        <button type="submit">Login</button>
        <button type="reset">Cancel</button>
      </form>
    </div>
  );
};

export default Login;
