import React from 'react'

const ListItem = (props) => {
    const {username} = props

  return <li>Username : {username}</li>

}

export default ListItem