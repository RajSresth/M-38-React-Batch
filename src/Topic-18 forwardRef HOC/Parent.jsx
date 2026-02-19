import React, { Fragment,useRef } from 'react'
import Input from "./Input";

const Parent = () => {
    const nameRef = useRef(""); // nameRef = { current: ""}


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Username:",nameRef.current.value);
        console.log("Form Submitted..!");
    }

  return (<Fragment>

        <h2>Signin Form</h2>
        <form action="" onSubmit={handleFormSubmit}>
        
            <Input
             ref={nameRef}
             placeholder="Enter your name"
             type="text" 
             name="username"
            />

            <button type="submit">Submit</button>
        </form>
   </Fragment>)
}
   

export default Parent