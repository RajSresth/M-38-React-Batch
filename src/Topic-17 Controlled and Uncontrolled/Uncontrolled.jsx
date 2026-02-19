import {useRef} from 'react'

const Uncontrolled = () => {
    const nameRef = useRef("");  // nameRef = { current: <input type="text" /> }
    const emailRef = useRef("");  // emailRef = { current: <input type="email" /> }
    const passwordRef = useRef();  // passwordRef = { current: <input type="password" /> }


    const handleFormSubmit = (e) => {
          e.preventDefault();
          console.log("Username:",nameRef.current.value);
          console.log("Email:", emailRef.current.value);
          console.log("Password:", passwordRef.current.value);


        //   const user = {
        //     username: nameRef.current.value,
        //     email: emailRef.current.value,
        //     password: passwordRef.current.value
        //   }


        //   fetch("http://localhost:3000/api/v1/register",{
        //     method:"POST",
        //     headers:{
        //         'Content-Type':'application/json',
        //         'authorization': `Bearer ${token}`
        //     },
        //     body: JSON.stringify(user)
        //   });

          
          console.log("Form Submitted..");


            nameRef.current.value = "" ;
            emailRef.current.value = "" ;
           passwordRef.current.value= "";
    }

    const handleFormReset = () => {
     
        nameRef.current.value = "" ;
        emailRef.current.value = "" ;
        passwordRef.current.value= "";
        console.log("Form Reset..");
    }

    console.log("Uncontrolled Component Render");

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
        ref={emailRef}
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
        ref={passwordRef}
        required
      />
      <br />
      <br />

      <button type="submit">Register</button>&nbsp;
      <button type="reset">Cancel</button>
    </form>
  )
}

export default Uncontrolled