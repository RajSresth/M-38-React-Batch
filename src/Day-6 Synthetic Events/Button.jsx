import React from 'react'
import "../index.css"

const Button = ({text,handleClick}) => {
    // console.log(props);
    
  return (
    <button className='btn' onClick={handleClick}>{text} </button>
  )
}

export default Button