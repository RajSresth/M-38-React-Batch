import React, { memo } from 'react'


//! basic way
// const Child = React.memo(() => {
//   console.log("Child Render");
  
//   return (

//     <div>
//       <h1>Child Component</h1>
//     </div>
//   )
// })


//! better way to write is that we can write it while exporting ...  export default React.memo(Child)
// const Child = () => {

//   console.log("Child Render");
  
//   return (

//     <div>
//       <h1>Child Component</h1>
//     </div>
//   )
// }

// export default React.memo(Child)



//! more better way of writting is that while importing we can use export default memo(Child)
// const Child = () => {

//   console.log("Child Render");
  
//   return (

//     <div>
//       <h1>Child Component</h1>
//     </div>
//   )
// }

// export default memo(Child)



//! now with props value too..isse phle props nhi bheje the
const Child = ({user}) => {

  const {username,age} = user

  console.log("Child Render");
  
  return (

    <div>
      <h1>Child Component</h1>
      <h2>Username: {username}</h2>
      <h2>Age: {age}</h2>

    </div>
  )
}

// compare true return kiya to skip hoga re-render child ka lekin agar compare false return krta h to child component re-render hoga
const compare = (prevProp,nextProp) => {
  const status = prevProp.user === nextProp.user
  console.log("status:",status);
  
  return status
}

export default memo(Child,compare)