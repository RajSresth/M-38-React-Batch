import  { useState } from 'react'

const Child1 = ({count,setCount}) => {
  
  return (
    <div>
      <h2>===================</h2>
      <h2>Child-1 Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count+1)}>Add</button>
    </div>
  )
}

export default Child1