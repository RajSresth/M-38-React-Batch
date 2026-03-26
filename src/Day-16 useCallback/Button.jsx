import React from 'react'

const Button = ({fn}) => {

    console.log("Button render");
    

  return (
    <div>
        <button onClick={fn}>
            Add
        </button>
    </div>
  )
}

export default React.memo(Button)