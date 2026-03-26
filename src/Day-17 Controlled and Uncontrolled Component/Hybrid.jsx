import React, { useRef, useState } from 'react'

const Hybrid = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const nameRef = useRef("")


    const handleFormSubmit = (e) => {
        e.preventDefault()

        console.log("Username:",nameRef.current.value);
        console.log("Email:",email);
        console.log("Password:",password);

        console.log("Form Submitted");

        //cleaning
        nameRef.current.value=""
        setEmail("")
        setPassword("")
        
        
        
    }

    const handleFormReset = () => {
        
    console.log("Hybrid Form Reset");

        //cleaning
        nameRef.current.value=""
        setEmail("")
        setPassword("")
    }

    console.log("Hybrid Form Render");
    

  return (
    
        <form action="" onSubmit={handleFormSubmit} autoComplete="off" onReset={handleFormReset}>

      <div>
        <label htmlFor="input-1">Username</label>&nbsp;
        <input
          type="text"
          placeholder="Enter FullName"
          id="input-1"
          ref={nameRef}
          name="username"

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
        onChange={(e)=> {setEmail(e.target.value)}}
          name="email"

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
        onChange={(e)=> {setPassword(e.target.value)}}
          name="password"

        />
        <br />
        <br />
      </div>

      <div>
        <button type="submit">Register</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  )
}

export default Hybrid