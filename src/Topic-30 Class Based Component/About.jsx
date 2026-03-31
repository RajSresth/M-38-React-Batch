import React from 'react'
import User from "./User";
import UserClass from "./UserClass"

const About = () => {
  return (
    <div>
        <h1>About Function Component</h1>
        <User username={"Tinku Singh"} address={"UP"} /> 
        <UserClass username={"Dinga Singh"} address={"Chattisgarh"} />
    </div>
  )
}


export default About;



