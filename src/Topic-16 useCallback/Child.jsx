import React from 'react'

const Child = ({result,user}) => {
    console.log("2. Child Render")
  return (
    <div>
        <h2>Child Component</h2>
        <h3>Result: {result}</h3>
        <h3>Username: {user.username} </h3>
        <h3>Age: {user.age}</h3>
    </div>
  )
}

export default React.memo(Child);