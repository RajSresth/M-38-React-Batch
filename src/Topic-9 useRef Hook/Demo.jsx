import {useState,useRef} from "react";


const Demo = () => {
    const [x, setX] = useState(0);
    let y = 0;

    const z = useRef(0);

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