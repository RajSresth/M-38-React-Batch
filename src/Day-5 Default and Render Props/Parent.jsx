import React from 'react'
import Child from "./Child.jsx"

//default k liye
// const Parent = () => {
    
    //   return (
        //     <>
        //     <h1>Parent Component</h1>
        
//     {/* <Child message={"Namaste Developers"} username="Tinku"/> */}
//     {/* <Child/> */}
//     </>
//   )
// }

// export default Parent



//! render prop k liye
const Parent = () => {

    //isme user="Chombu default value of prop h taki agar hmlog value na de to ye default wala value print ho jayega"
    const greet = (user="Chombu") => <h3>Hello {user}</h3>  //ye h render prop kyuki isme jsx return horha h
    const msg = () => "Namaste Dev"  // ye render prop nhi h kyuki isme jsx return nhi horha
    
    return (
    <>
    <h1>Parent Component</h1>
    <Child greet={greet} msg={msg}/>
    </>
  )
}

export default Parent