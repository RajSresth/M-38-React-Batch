import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Parent = () => {
  const {username, setUsername} = useUser(UserContext)
  return (
    <div>
      <h2>Parent Component</h2>
      <h3>Username in Parent: {username}</h3>        
    </div>
  )
}

export default Parent