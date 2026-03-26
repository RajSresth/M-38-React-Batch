import React from 'react'

const Button = ({text,increment}) => {
    console.log("Button component render");
    
  return (
    <button onClick={increment}>{text}</button>
  )
}

export default Button