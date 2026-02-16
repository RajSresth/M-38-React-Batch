import {useState} from 'react';
import Child from "./Child"

const Parent = () => {
  const [text, setText] = useState("");
  const [emp, setEmp] = useState({ username: "Amit", age: 21});

  // emp = {} 02x2
  

  console.log("Parent Render");
  const handleChange = (e) => {
      setText(e.target.value)
  }

  const handleClick = () => {
    setEmp({...emp,age: 24})
  }

  return (
    <div id="parent-component">
      <h1>Parent Component</h1>
      <input 
       type="text"
       value={text} 
       placeholder='Enter fullname'
       onChange={handleChange}
       />
       <h2>Count:</h2>
       <button type='button' onClick={handleClick}>Click</button>

       <Child user={emp} />  
    </div>
  )
}
export default Parent






/**
 *  1st  ----> H   - parent render
    2nd  ----> Ho  - parent render
    3rd  ----> Hom   - parent render
    4th  ----> Home   - parent render
 */
