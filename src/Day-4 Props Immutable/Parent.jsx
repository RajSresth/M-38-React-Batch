import React from 'react'
import Child from './Child'

const Parent = () => {
    const person = {
        fullname:"Chombu Singh",
        city:"Noida"
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <Child person = {person} />
    </div>
  )
}

export default Parent