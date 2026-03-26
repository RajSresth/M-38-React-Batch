import React, { useRef } from 'react'
import Input from './Input'


const Parent = () => {

    const parentRef = useRef("")  // inputRef = { current : {  focus: () => childInputRef.current.focus(),  clear: () => childInputRef.current.value = "" } }
    console.log("Username:",parentRef.current);
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

  console.log("1 Parent Render");


  return (

    <form type='submit' action="" onSubmit={handleFormSubmit}>

        <Input ref={parentRef}/>
        <button onClick={() => {parentRef.current.focus()}}>
            Focus
        </button>

        <button onClick={() => {parentRef.current.clear()}}>
            Clear
        </button>

        <button type='submit'>Submit</button>

    </form>

  )
}

export default Parent