import React from 'react'

//default prop
// const Child = ({message="Hello Developer ✅"}) => {
// //    console.log(props);
    
//   return (
//     <div>Child Component
//     <h3>Message : {message}</h3>
    
// </div>
//   )
// }

// export default Child


//best way for default prop
// const Child = ({message = "GOOD MORNING",username = "CHOMBU SINGH"}) => {
    
//   return (
//     <div>Child Component
//     <h3>Message : {message}</h3>
//     <h3>Username : {username}</h3>
    
// </div>
//   )
// }

// export default Child





//render props

const Child = ({greet,msg}) => {
  return (
    <div>
        <h2>Child</h2>
        {greet("Amit")}        
        {msg()}

        </div>
  )
}

export default Child


