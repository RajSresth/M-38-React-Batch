import React from 'react'

const Employee = (props) => {
    // const {username,salary,skills} =props.user
    const {username,salary,skills} =props
  return (
    <div>Employee Component
        <h2>Username: {username}</h2>
        <h2>Salary: {salary}</h2>
        <h2>Skills: {skills}</h2>
    </div>
  )
}

export default Employee