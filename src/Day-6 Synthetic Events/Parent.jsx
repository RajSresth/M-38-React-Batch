import React from 'react'
import Child from './Child'
import Button from './Button'
// import "../index.css"


const Parent = () => {

    const handleClick = (e) => {
        console.log("Clicked..",e);
        const h1 = document.querySelector("h1")
        h1.textContent = "Namaste Developers";
        h1.style.color="red";
    }

  return (
    <div>
        <h1>Hello Developers</h1>

        {/* react inline css */}
        {/* <button style={ {padding:"8px 5px", backgroundColor:"black", color:"white", border:"none",outline:"none",cursor:"pointer"} } >Click</button> */}

        {/* css using index.css */}
        {/* <button className='btn' onClick={handleClick} >Click</button> */}

        <Button text="start" handleClick={handleClick}/>

    </div>
  )
}

export default Parent

