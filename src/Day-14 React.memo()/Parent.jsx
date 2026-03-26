import React, { useState } from 'react'
import Child from './Child';


const Parent = () => {
    const [text,setText] =useState("")
    const [count,setCount] =useState(0)
    const [emp,setEmp] =useState({username:"Amit", age:21})

    console.log("Parent Render");
    
    const handleChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value)
    }

    const handleClick = () => {
        setEmp({...emp,age:24})
    }
    
  return (
    <div id='parent-component'>
        <h1>Parent</h1>
        <input 
        type="text" 
        value={text} 
        placeholder='Enter fullname'
        onChange={handleChange}
        />

        <h2>Count: {count}</h2>
        <button onClick={handleClick} type='button'>Increment Age</button>

        <Child user={emp} />
    </div>
  )
}

export default Parent