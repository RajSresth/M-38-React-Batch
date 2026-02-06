import React from 'react'

const Card = (props) => {
    console.log("props:",props);

    const {id,username,email,phone} = props
  return (
    <div className="card">
        <h4>Emp Id: {id}</h4>
        <h4>Username: {username}</h4>
        <h4>Email: {email}</h4>
        <h4>Mobile: {phone}</h4>
    </div>
  )
}

export default Card