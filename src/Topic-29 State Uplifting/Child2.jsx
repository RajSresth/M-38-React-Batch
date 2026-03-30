import React from 'react'

const Child2 = ({count,setCount}) => {
  return (<div>
    <h2>===================</h2>
    <h3>Child-2 Component</h3>
    <h3>Count:{count}</h3>
    <button onClick={()=> setCount(count-1)}>Decrease</button>
  </div>)
}

export default Child2