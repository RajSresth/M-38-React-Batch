import "../index.css";

const Button = ({handleClick,text}) => {
   
    return <button className="btn" 
            onClick={handleClick}>
            {text}
           </button>
}

export default Button;