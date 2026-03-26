import { useState, useMemo } from "react";
import Child from "./Child";
import "./style.css"

const Parent = () => {
  const [number, setNumber] = useState("");
  const [theme, setTheme] = useState(false);

    // Heavy Operation
    const nthPrime = (n) => {

              if(n === 0){
                  return 0;
              }
             
              let count = 0;
              let num = 1;

          while (count < n) {
              num++;
              let isPrime = true;

              for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) {
                  isPrime = false;
                  break;
              }
              }

              if (isPrime) count++;
          }

          return num;
      }

    const result = useMemo(() => nthPrime(number), [number])    

    console.log("Parent render");
    
  return (
    <div>
      <h1>Parent Component</h1>
      <input 
         type="text" 
         value={number} 
         placeholder="Enter Number" 
         onChange={(e) => setNumber(+e.target.value)}
        />

        <button type="button"
            className={theme?"dark":"light"}
           onClick={() => setTheme(!theme)}
         >
            {theme? "Light" : "Dark"}
        </button>

      <Child result={result}/>
    </div>
  );
};

export default Parent;
