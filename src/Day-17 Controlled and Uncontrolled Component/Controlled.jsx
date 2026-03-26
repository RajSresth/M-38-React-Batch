import React, { useState } from "react";

const Controlled = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault()

    console.log("Username:",username);
    console.log("Email:",email);
    console.log("Password:",password);
    
    alert("Form Submitted !!");
      
    //clearing input fields
    setUsername("")
    setEmail("")
    setPassword("")
    
  }


  const handleFormReset = () => {

    setUsername("")
    setEmail("")
    setPassword("")
    console.log("Form Reset !!");
    
  }

  console.log("Controlled Component Render");
  
  return (
    <form action="" onSubmit={handleFormSubmit} autoComplete="off" onReset={handleFormReset}>

      <div>
        <label htmlFor="input-1">Username</label>&nbsp;
        <input
          type="text"
          placeholder="Enter FullName"
          id="input-1"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
      </div>

      <div>
        <label htmlFor="input-2">
          Email<sup style={{ color: "red" }}>* &nbsp;</sup>
        </label>
        <input
          type="email"
          placeholder="xyz@gmail.com"
          id="input-2"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <br />
        <br />
      </div>

      <div>
        <label htmlFor="input-3">
          Password<sup style={{ color: "red" }}>* &nbsp;</sup>
        </label>
        <input
          type="password"
          placeholder="atleast 8 characters"
          id="input-3"
          required
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <br />
        <br />
      </div>

      <div>
        <button type="submit">Register</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  );
};

export default Controlled;
