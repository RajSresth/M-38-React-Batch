import {useState, useEffect} from 'react'
import style from "./Home.module.css"
import Card from '../components/Card'
import Shimmer from './Shimmer';
import {Link} from "react-router-dom";

const Home = () => {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setResponse(data);
    }


    if(response.length === 0){
        return <Shimmer/>
    }

  return (
    <div className={style.home}>
       <div className={style.centerContainer}>
            <h2 className={style.title}>Shop All</h2>
            <div className={style.cardContainer}>
                {
                    response.map(element => 
                        <Link key={element.id} to={`user/${element.id}`} >
                            <Card  {...style} {...element}></Card>
                        </Link>
                    )
                }
                
            </div>
       </div>
    </div>
  )
}

export default Home