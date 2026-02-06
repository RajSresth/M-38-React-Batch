import {useState,useEffect} from 'react'
import Shimmer from "./Shimmer";
import Card from "./Card"
import "./style.css"

const Container = () => {
    const [response,setResponse] = useState([]);

    useEffect(()=>{
        getUsers()
    })

    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setResponse(data)
    }

    if(response.length === 0)
    {
        return <Shimmer/>
    }
  return (
    <div className="card-container">
        {
            response.map(element=> <Card {...element}/>)            
            
        }
    </div>
  )
}

export default Container