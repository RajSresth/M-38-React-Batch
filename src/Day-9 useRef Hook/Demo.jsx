import {useState,useRef} from "react";

const Demo = () => {
    const [x, setX] = useState(0); // ye useState h to ye increment hone se component ko re-render krwayega aur ui pe show krte rhega hamesha updated value

    let y = 0;  // kisi state k update hone pe ye wapas se ui mai 0 dikhayega kyuki re-render pe ye wapas 0 se initialize ho k ui mai 0 bhej dega

    const z = useRef(0); // ye initially 0 se start hota then increase hote rhega aur re-render ka ispe fark nhi pdta ..ye piche mai apna increase hote rhega jb iska func call hota rhega lekin ui pe sirf tb hi dikhega jab component re-render hoga yaani koi state update tb ye ref ka uss time tk wala updated value sidhe ui mai aajayega

    console.log("Demo render");

    const handleX=() => {
            setX(x + 1);
    }

    const handleY = () => {
           y = y + 1;
           console.log("Normal-y:",y)
    }

    const handleZ = () => {
        z.current = z.current + 1;
        console.log("userRef-z:",z.current);
    }

    return <div>
        <h1>Demo Component</h1>
        <h2>State-x: {x}</h2>
        <button onClick={handleX}>Increment X</button>

        <h2>Normal-y: {y}</h2>
        <button onClick={handleY}>Increment Y</button>

        <h2>useRef-z: {z.current}</h2>
        <button onClick={handleZ}>Increment Z</button>
    </div>
}



export default Demo;