import React from 'react'
import List from './List'
import Employee from './Employee'

const Props = () => {
    const user = {
      username:"Tinku",
      salary:"4000",
      skills:["css",'python'],
    }

  return (
    <>
      {/* <Employee user={user}/> */}
      <Employee {...user}/>
      <List a={10} user={user} msg={"Good Morning"}/>
    </>
  )
}

export default Props