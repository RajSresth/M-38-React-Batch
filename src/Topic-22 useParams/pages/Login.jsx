import { useState } from "react";
import style from "./Login.module.css";
import { isValidate } from "../utils/validator.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
      e.preventDefault();

    const { status} = isValidate(email, password);
   

    if (status) {
        navigate("/dashboard", {replace:true, state:{username: "Hemant Kumar"}});
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
