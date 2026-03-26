import React from 'react'

const List = (props) => {
    console.log(props);
    
  return (
    <>
        <h2>a:{props.a}</h2>
        <h2>Username:{props.user.username}</h2>
        <h2>Message:{props.msg}</h2>
    </>
  )
}

export default List