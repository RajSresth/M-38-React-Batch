import React, { useEffect, useImperativeHandle, useLayoutEffect, useRef } from "react";

const Input = ({ref}) => {
  const childInputRef = useRef(""); // childInputRef = { current: ""}

  console.log("ref:", ref); // { current: ,<input/>}

  useLayoutEffect(() => {
    console.log("3 useLayoutEffect Hook");
  },[])

  useImperativeHandle(ref, () => {
    console.log("4 UseImperative Handle Hook");
    return {
      focus: () => childInputRef.current.focus(),
      clear: () => childInputRef.current.value = ""
    }
  },[]);

  

  useEffect(() => {
    console.log("5 useEffect Hook");
    
  },[])

  console.log("2 Input Render");
  

  return <input type="text" name="username" placeholder="enter fullname" ref={childInputRef} />;
};

export default Input;
