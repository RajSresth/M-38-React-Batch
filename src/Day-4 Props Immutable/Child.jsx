import React from 'react'

const Child = (props) => {

    // const {person}=props
    props.person.age = 26
    console.log(person);
    

  return (
    <div>Child Component</div>
  )
}

export default Child