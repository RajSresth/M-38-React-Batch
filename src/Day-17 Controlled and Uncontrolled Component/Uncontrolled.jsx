import React, { useRef } from 'react'


const Uncontrolled = () => {

    const nameRef = useRef()  //nameRef : { current: <input type="text"> }
    const emailRef = useRef()  //emailRef : { current: <input type="email"> }
    const passwordRef = useRef()  //passwordRef : { current: <input type="password"> }



    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Username:",nameRef.current.value);
        console.log("Email:",emailRef.current.value);
        console.log("Password:",passwordRef.current.value);

        //backend mai aise dataa bhejte h (POST method)
        // const user = {
        //     username: nameRef.current.value,
        //     email:emailRef.current.value,
        //     password:passwordRef.current.value
        // }
        // fetch("https://localhost/api/v1/register" , {
        //     method:"POST",
        //     headers:{
        //         'Content-Type':'application/json',
        //         'authorization': `Bearer ${token}`
        //     },
        //     body: JSON.stringify(user)
        // })


        console.log("Form Submitted");

        //clearing input fields
        nameRef.current.value=""
        emailRef.current.value=""
        passwordRef.current.value=""
        
    }

    const handleFormReset = () => {

        nameRef.current.value=""
        emailRef.current.value=""
        passwordRef.current.value=""
        console.log("Form Reset");
        
    }

    console.log("Uncontrolled Component Render");
    

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
          ref={emailRef}
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
          ref={passwordRef}
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

export default Uncontrolled