import React from 'react'

const User = () => {

    // const isLogin = true
    
    // if (!isLogin){
        //     return <h1>Home Page</h1>
        // }
        

    //using ternary operator we are doing conditional rendering
    const isLogin = true
    return isLogin? <h1>User Dashboard Page</h1> : <h1>Home Page</h1>


}

export default User