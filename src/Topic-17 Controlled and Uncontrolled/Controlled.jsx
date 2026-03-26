import {useState} from "react";

const Controlled = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);

       alert("Form Submitted...");

       setUsername("");
       setEmail("");
       setPassword("");
    }

    const handleFormReset = () => {
        console.log("Form Reset")
        setUsername("");
        setEmail("");
        setPassword("");
    }
    console.log("Controlled Component Render")

  return (
    <form action="" onSubmit={handleFormSubmit} onReset={handleFormReset} autoComplete="off">
      <label htmlFor="input1">Username&nbsp;</label>
      <input
        type="text"
        placeholder="Enter fullname"
        id="input1"
        name="username"
        value={username}
        onChange={(e)=> setUsername(e.target.value.trim())}
      />
      <br />
      <br />

      <label htmlFor="input2">
        Email<sup style={{ color: "red" }}>*</sup>&nbsp;
      </label>
      <input
        type="email"
        placeholder="xyz@gmail.com"
        id="input2"
        name="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value.trim())}
        required
      />
      <br />
      <br />


      <label htmlFor="input3">
        Password<sup style={{ color: "red" }}>*</sup> &nbsp;
      </label>
      <input
        type="password"
        placeholder="at least 8 characters"
        id="input3"
        name="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value.trim())}
        required
      />
      <br />
      <br />

      <button type="submit">Register</button>&nbsp;
      <button type="reset">Cancel</button>
    </form>
  );
};

export default Controlled;
