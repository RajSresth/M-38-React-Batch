import {useState,useRef} from 'react'

const Demo2 = () => {
    const [value,setValue] = useState("");

    console.log("Demo2 Render")

    const task = (e) => {
        // console.log(e.target.value);
        setValue(e.target.value);
    }
    
  return (
    <div id="demo2-component">
        <h1>Demo2 Component</h1>
        <input 
             type="text" 
             name="fullname"
             placeholder='Enter fullname' 
             value={value} 
             onChange={task} 
        />
    </div>
  )
}

export default Demo2