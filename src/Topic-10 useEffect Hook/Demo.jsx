import {useState,useEffect} from 'react'

const Demo = () => {
    const [response, setReponse] = useState([]);

    console.log("Demo Render");
    useEffect(()=>{
        getUsers()
    }, [])

    // API Call
    const getUsers = async () => {
        const resp = await fetch("https://api.github.com/users");
        const data = await resp.json();
        setReponse(data);
    }

    // Conditional Rendering
    if(response.length === 0)
    {
        return <div>Default Demo UI</div>
    }

  return (
    <div>Original Demo UI</div>
  )
}

export default Demo