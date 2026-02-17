import React from 'react'

const Child = ({result=0}) => {
    
    console.log("Child render");
  return (
    <div>
        <h2>Child Component</h2>
        <h2>nth Prime number is: {result}</h2>
    </div>
  )
}

export default React.memo(Child);