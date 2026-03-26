import List from "./List";

const User = () => {

    const users = ["Harsh", "Vishal", "Ansh"];

    return <ul>
                {
                    users.map((element,index,array)=>{
                        return <List  username={element} key={index} />
                    })
                }
          </ul>
}

export default User;

/**
 * ! second way of map()
const User = () => {

    const users = ["Harsh", "Vishal", "Himanshu"];

    return <ul>
            {
               users.map(( element,index,array)=>{
                    return <li>{element}</li>
                })
            }
         </ul>
}

export default User;
 */

/**
 * ! First Normal Ways
import List from './List';

const User = () => {

    const persons = ["Tinku", "chombu", "chombi", "dinga","simba"];

    return <ul id="user-component">
            <List  username={persons[0]} />
            <List  username={persons[1]} />
            <List  username={persons[2]} /> 
            <List  username={persons[3]} />        
            <List  username={persons[4]} />        
           </ul> 
}
     
export default User;
 */



  