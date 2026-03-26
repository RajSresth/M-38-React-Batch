import React from 'react'

const Button = ({fn}) => {
    console.log("2. Button Render")
    
    return  <button onClick={fn}>Add</button>
}

export default React.memo(Button)