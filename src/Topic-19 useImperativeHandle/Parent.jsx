import {useRef} from "react";
import Input from "./Input";

const Parent = () => {
  const parentRef = useRef("");
 
 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Username:",parentRef.current);
  };

  console.log("1. Parent Render")

  return (
    <form action="" onSubmit={handleFormSubmit}>
       
      <Input ref={parentRef} />

      <button onClick={() => parentRef.current.focus() }>
        Focus
      </button>

      <button onClick={() => parentRef.current.clear()}>
        Clear
      </button>
        
      <button type="submit" >
        Submit
      </button>
    </form>

  );
};

export default Parent;


/**
         parentRef = { 
            current : {
                        focus: () => childInputRef.current.focus(),
                        clear: () => childInputRef.current.value = ""
                    }
        }
 */