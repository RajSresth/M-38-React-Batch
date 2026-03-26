import {useState, useRef} from 'react'

const Hybrid = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nameRef = useRef("");


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", nameRef.current.value);
        console.log("Email:", email);
        console.log("password:", password);

        console.log("Form Submitted..!");
        nameRef.current.value = "";
        setEmail("");
        setPassword("");
    }

    const handleFormReset = () => {
        nameRef.current.value = "";
        setEmail("");
        setPassword("");
        console.log("Form reset..!");
    }

  return (
    <form action="" onSubmit={handleFormSubmit} onReset={handleFormReset} autoComplete="off">
      <label htmlFor="input1">Username&nbsp;</label>
      <input
        type="text"
        placeholder="Enter fullname"
        id="input1"
        name="username"
        ref={nameRef}
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
        onChange={(e)=> setEmail(e.target.value)}
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
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <br />

      <button type="submit">Register</button>&nbsp;
      <button type="reset">Cancel</button>
    </form>
  )
}

export default Hybrid