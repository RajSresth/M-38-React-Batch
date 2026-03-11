import React, { useContext } from 'react'
import Parent from './Parent'
import { UserContext } from './UserContext'

const GrandParent = () => {
    const {username, setUsername} = useUser(UserContext)
  return (
    <div>
        <h2>I am Grand Parent</h2>
        <h2>Username in Grandparent: {username}</h2>
        <button onClick={() => setUsername("Chombu Singh")}>Change Name</button>
    </div>
  )
}

export default GrandParent