import {createContext} from "react";

export const UserContext = createContext()
// userContext = { username: "Sanju samson"}


export const UserProvide  = ({children}) => {
    const [username, setUsername] = useState("")
    const login = async() => {}
    const logout = async() => {}

    return <UserContext.Provider value={{username, login,logout,setUsername}}>
        {children}
    </UserContext.Provider>
}

export const useUser = (store) =>{
 const data = useContext(store);
 return data
} 

/**
 *  - Context API Basic
 *  - Context API
 *  - Nested Context API
 *  - Re rendering in context API
 *  - Issues of context API
 *  - Why redux
 */