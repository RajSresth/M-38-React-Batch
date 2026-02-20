import {useRef,useImperativeHandle,useLayoutEffect, useEffect} from 'react'

const Input = ({ref}) => {
    const childInputRef = useRef(""); // childInputRef = { current: ""}
    
    useLayoutEffect(()=>{
        console.log("4. UseLayoutEffect Hook");
    }, [])



   useImperativeHandle( ref,() => {
            console.log("3. UseImperativeHandle Hook");
                    return {
                        focus: () => childInputRef.current.focus(),
                        clear: () => childInputRef.current.value = ""
                    }
                }, []);

   
    useEffect(()=>{
        console.log("5. UseEffect Hook");
    }, [])


    console.log("2. Input Render");
    return <input 
             type="text"
             name="username"
             placeholder="Enter fullname" 
             ref={childInputRef}
             />
}
        
export default Input