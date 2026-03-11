import {useContext} from 'react'
import { UserContext } from './UserContext.jsx'

const Child = () => {

  const {username} = useContext(UserContext);
  return (
    <div>
        <h2>Child Component</h2>
        <h3>Username: {username}</h3>
    </div>
  )
}

export default Child