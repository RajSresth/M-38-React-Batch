import React from 'react'
import ListItem from './ListItem'


//first way
// const User = () => {
//     const persons = ['Tinku',"harsh",'hemant']

//   return (
//     <ul id='user-component'>
//         <ListItem username = {persons[0]}/>
//         <ListItem username = {persons[1]}/>
//         <ListItem username = {persons[2]}/>

//     </ul>
//   )
// }

// export default User



// second way
// const User = () => {
//     const users = ['Harsh',"Himanshu",'Vishal',"Ansh"]

//   return (
//     <ul id='user-component'>
//         {
//           users.map((ele,index,array) => {
//             return <li>{ele}</li>
            
//           })
//         }

//     </ul>
//   )
// }



//third way
const User = () => {
    const users = ['Harsh',"Himanshu",'Vishal',"Ansh"]

  return (
    <ul id='user-component'>
        {
          users.map((ele,index,array) => {
            return <ListItem username={ele} key={index}/>
            
          })
        }

    </ul>
  )
}

export default User