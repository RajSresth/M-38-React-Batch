
import Button from "./Button";

const Parent = () => {

    const handleClick = (e) => { 
       const h1 = document.querySelector("h1");
       h1.textContent = "Namaste Developers..!";
       h1.style.color="red";
    }     
    
    return <div>
        <h1>Hello Developers..!</h1>
        {/* <button className="btn" onClick={handleClick} >Click</button> */}

        <Button text="click" handleClick={handleClick} />
    </div>
}


export default Parent;



   
    
    
