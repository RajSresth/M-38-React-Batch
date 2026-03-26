<<<<<<< HEAD
// import pic from "./assets/react.svg"
// import React from "react"




// just printing hello world
//React element = JS Object{}
// export const h1 = <h1 id="heading">Hello From React</h1>


//ye bhi h React Element = JS Object{}
// export const div = <div className="parent">
//   <h1>Heading Tag-1</h1>
//   <h2>Heading Tag-2</h2>
// </div>


//ab agar insert krna hua to mtlb ki jsx mai js use krna hua to {} iske andar js likhne pe chalega 
//eg 1
// const username = "Tinku"
// export const div = <div>
//                   {username}
//                   </div>

//eg 2
// export const div = <div>
//                   {h1}
//                   </div>


// eg3
//condition
// const user = "Ankit"
// const isLogin = false
//! suppose div ko class dena h to hume className dena higa usko kyuki jsx mai class nhi className h 
//! aur image bhi lagana h to phle uss image ko kisi variable mai import krdo then uss variable ko img tag k src attribute mai {variable} aise krke use kro
//! also we will see condition rendering
// export const div = <div className="container">
//                   {h1}
//                   {/* <img src={pic} alt=""></img> */}
//                   <img src={pic} alt="" />
//                   {/* { user && "Hello"} */}
//                   { user && console.log("Hello")}
//                   {isLogin ? console.log("Hello User") : console.log("Please login")}

//                   </div>



//! eg 4 conditional rendering(or ternary operator):- mtlb condition k basis pe ui change ho rha h to aise expression ko conditional rendering kehte h lekin agar condition se mera ui mai kuch fark nhi pdta h blki kisi aur operation k liye use hota tb wo ternary operator kehlayega
//! short circuit operator h ye wala {user && 'hello'} 
//! fragments h ye <></> ye actually extra node create nhi krta h ..lekin isko <React.Fragment></React.Fragment> krke bhi use kr skte h but React ko import krlena phle hi

// export const h1 = <h1 id="heading">Learning React</h1>
// //! kuch condition bhi le lete h:
// const user = "Ankit"
// const isLogin = false
// const tag1 =<h3>Login</h3>
// const tag2 =<h3>Logout</h3>

// export const div = <>
//                   {h1}
                //   {isLogin ? tag2 : tag1}
                //   {/* islogin agar false h to tag1 chalao warna tag2 chalao */}
                //   {user && 'hello'}
                //   </>






//Component lecture

// export function greet(){
//     const msg = <h2>Hello Developers</h2>
//     return msg
// }

// export const h1 = <h1 id="heading">Learning React</h1>

// export const h2 = <div>Hello from React element </div>

// function  App() {
//     const result = <div id="container">
//                     {h1}
//                     {greet()}
//                     </div>

//     return result
// }
// export default App



//! real component making => react arrow function component export (rafce) 
//component composition:- composite composition:- matlb ki ek component ko kisi dusre component k anadr call kiya jata h 
// means:- To call a component inside another component is known as component composition

// import Header from './components/Header'
// import Footer from './components/Footer'

// const App =() =>  (  //implicit return type arrow func component
//             <>
//             <Header/>
//             <Header/>
//             <h1>App Component</h1>
//             <Footer/>
//             </> )

// export default App


//! day-1 props lecture
// import Props from "./Day-1 Props/Props"
// import User from "./Day-2 conditional rendering/User"
// import User from "./Day-3 map reduce filter/User"
// import Parent from "./Day-4 Props Immutable/Parent"
// import Parent from "./Day-5 Default and Render Props/Parent"
// import Parent from "./Day-6 Synthetic Events/Parent"
// import Counter from "./Day-7 useState Hook/Counter"
// import Counter from "./Day-8 Rules of useState/Counter"
// import Demo from "./Day-9 useRef Hook/Demo"
// import Demo2 from "./Day-9 useRef Hook/Demo2"
// import Demo3 from "./Day-9 useRef Hook/Demo3"
// import Demo from "./Day-10 useEffect Hook/Demo"
// import Demo2 from "./Day-10 useEffect Hook/Demo2"
// import { useEffect, useState } from "react"
// import Demo1 from "./Day-11 advanced useEffect Hook/Demo1"
// import Demo2 from "./Day-11 advanced useEffect Hook/Demo2"


// const App = () => {

//      const [count,setCount] = useState(0)
    
//       useEffect(() => {
//           console.log("App Use Effect");
//             return () => {
//               console.log("App Cleanup");
              
//             }  
//           })
//     console.log("App Render");
    
//     return (
//     <div id="app-component">
//         <h1>App Component</h1>
//         <h2>Count:{count}</h2>
//         <button className='btn' onClick={() => setCount(count+1)}>Add</button>
//         <div id="app-container">
//             {/* <Props/> */}
//             {/* <User/> */}
//             {/* <User/> */}
//             {/* <Parent/> */}
//             {/* <Parent/> */}
//             {/* <Parent/> */}
//             {/* <Counter/> */}
//             {/* <Counter/> */}
//             {/* <Demo/> */}
//             {/* <Demo2/> */}
//             {/* <Demo3/> */}
//             {/* <Demo/> */}
//             {/* <Demo2/> */}
//             <Demo1/>
//             <Demo2/>

//         </div>
//     </div>
// )}
// export default App




// import { useEffect, useState } from "react"
// import Demo1 from "./Day-11 advanced useEffect Hook/Demo1"
// import Demo2 from "./Day-11 advanced useEffect Hook/Demo2"
// import Container from "./Day-12 useEffect Api call and Shimmer ui/Container"
// import Counter from "./Day-13 useEffect stair case/Counter"
// import Parent from "./Day-14 React.memo()/Parent"
// import Parent from "./Day-15 useMemo Hook/Parent"
// import Parent from "./Day-16 useCallback/Parent"
// import Controlled from "./Day-17 Controlled and Uncontrolled Component/Controlled"
// import Uncontrolled from "./Day-17 Controlled and Uncontrolled Component/Uncontrolled"
// import Hybrid from "./Day-17 Controlled and Uncontrolled Component/Hybrid"
// import Parent from "./Day-18 ForwardRef HOC/Parent"
// import Parent from "./Day-19 useImperativeHandle/Parent"
// import Home from "./Day-20 useLayoutEffect/Home"

// const App = () => {

    //     return (
//     <div id="app-component">
//         <h1>App Component</h1>
//             {/* <Props/> */}
//             {/* <User/> */}
//             {/* <User/> */}
//             {/* <Parent/> */}
//             {/* <Parent/> */}
//             {/* <Parent/> */}
//             {/* <Counter/> */}
//             {/* <Counter/> */}
//             {/* <Demo/> */}
//             {/* <Demo2/> */}
//             {/* <Demo3/> */}
//             {/* <Demo/> */}
//             {/* <Demo2/> */}
//             {/* <Demo1/> */}
//             {/* <Demo2/> */}
//             {/* <Container/> */}
//             {/* <Counter/> */}
//             {/* <Parent/> */}
//             {/* <Parent/> */}
//             {/* <Parent/> */}
//             {/* <Controlled/> */}
//             {/* <Uncontrolled/> */}
//             {/* <Hybrid/> */}
//             {/* <Parent/> */}
//             {/* <Parent/> */}
//             {/* <Home/> */}
//             <Home/>

            
//         </div>

// )}
// export default App

//! yaha se react-router-dom

// import Header from "./Day-21 React Router Part-1/Header"
// import "../src/Day-21 React Router Part-1/style.css"
// import { Outlet, useLoaderData } from "react-router-dom"


// const App = () => {

//     const data = useLoaderData()
//     console.log("data:",data);
    

//     return (
//     <div id="app-component">
//         <h1>App Component</h1>
//             <Header/>
//             <Outlet/>  
                  
//         </div>

// )}
// export default App

//! useParams yaha se

// import { Outlet } from "react-router-dom"
// import Header from "./Day-22 useParams/pages/Header"


// const App = () => {


    // return (
    // <div id="app-component">
    //     <h1>App Component</h1>
    //     <Header/>
    //     <main>
    //         {/* Outlet */}
    //         <Outlet/>
    //     </main>

    // </div>

// )}
// export default App


//! props drilling yaha se
// import React, { useState } from 'react'
// import GrandParent from "./Day-23 PropsDrilling/GrandParent.jsx"
// import {UserContext} from "./Day-23 PropsDrilling/UserContext.jsx"
// import Parent from './Day-23 PropsDrilling/Parent.jsx'
// import Child from './Day-23 PropsDrilling/Child.jsx'



// const App = () => {
//   const [username, setUsername] = useState("Chandan Kumar")

//   return (<>
//     <UserContext.Provider value={{username, setUsername}}>
//         <GrandParent />
//         <Parent/>
//     </UserContext.Provider>   
//         <Child/>
//     </>)
// }


// export default App


import { BrowserRouter, createBrowserRouter, Route } from "react-router-dom";
import {Routes} from "react-router-dom";
import { AuthProvider } from "./Day-24 Browser Router and ContextAPI/AuthContext";

import Body from "./Day-24 Browser Router and ContextAPI/Body";
import Home from "./Day-22 useParams/pages/Home"
import About from "./Day-22 useParams/pages/About"
import Career from "./Day-22 useParams/pages/Career"
import NotFound from "./Day-21 React Router Part-1/NotFound"
import Login from "./Day-22 useParams/pages/Login";

import Cart from "./Day-26 Advanced useReducer ContextAPI/Cart";
import ProtectedRoute from "./Day-26 Advanced useReducer ContextAPI/ProtectedRoute";
import Profile from "./Day-26 Advanced useReducer ContextAPI/Profile";
import Order from "./Day-26 Advanced useReducer ContextAPI/Order";

import { CartProvider } from "./Day-26 Advanced useReducer ContextAPI/CartContext";
=======



import { BrowserRouter, createBrowserRouter, Route } from "react-router-dom";
import {Routes} from "react-router-dom";
import { AuthProvider } from "./Topic-24 Browser Router and ContextAPI/AuthContext";

import Body from "./Topic-24 Browser Router and ContextAPI/Body";
import Home from "./Topic-22 useParams/pages/Home"
import About from "./Topic-22 useParams/pages/About"
import Career from "./Topic-22 useParams/pages/Career"
import NotFound from "./Topic-21 React Router Part-1/NotFound"
import Login from "./Topic-22 useParams/pages/Login";

import ProtectedRoute from "./Topic-26 Advanced useReducer ContextAPI/ProtectedRoute";
import Cart from "./Topic-26 Advanced useReducer ContextAPI/Cart";
import Profile from "./Topic-26 Advanced useReducer ContextAPI/Profile";
import Order from "./Topic-26 Advanced useReducer ContextAPI/Order";


import {CartProvider} from "./Topic-26 Advanced useReducer ContextAPI/CartContext"
>>>>>>> d07e9ecb7d8bae764b6429c2ded9a0cdff9fbac6


const App = () => {

  return (<AuthProvider>
<<<<<<< HEAD
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Body/>}>
                            {/* Public Routes  */}
                            <Route index element={<Home/>} />
                            <Route path="about" element={<About/>} />
                            <Route path="career" element={<Career/>} />

                            {/* PRIVATE ROUTES */}
                            <Route element={<ProtectedRoute/>}>
                                <Route path="cart" element={<Cart/>}/>
                                <Route path="profile" element={<Profile/>}/>
                                <Route path="order" element={<Order/>}/>
                            </Route>
                            
                            <Route path="*" element={<NotFound/>} />
                        </Route>
                        <Route path="login" element={<Login/>}/>
                    </Routes>
                
                </BrowserRouter>
            </CartProvider>
  </AuthProvider>)             
=======
                <CartProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Body/>}>
                                {/* public routes */}
                                <Route index element={<Home/>} />
                                <Route path="about" element={<About/>} />
                                <Route path="career" element={<Career/>} />

                                {/* Private routes user=_______ */}
                                <Route  element={<ProtectedRoute/> }>
                                    <Route path="cart" element={<Cart/>}/>
                                    <Route path="profile" element={<Profile/>} />
                                    <Route path="order" element={<Order/>} />
                                </Route>   
                            
                                <Route path="*" element={<NotFound/>} />
                            </Route>
                            <Route path="login" element={<Login/>}/>
                        </Routes>
                    </BrowserRouter>
                </CartProvider>
        </AuthProvider>)             
>>>>>>> d07e9ecb7d8bae764b6429c2ded9a0cdff9fbac6
            
};

export default App;


<<<<<<< HEAD
// import React from 'react'
// import Counter from './Day-25 useReducer Hook/Counter'
// import { CounterProvider } from './Day-25 useReducer Hook/CounterContext'
// import Parent from './Day-25 useReducer Hook/Parent'
// import Child from './Day-25 useReducer Hook/Child'

// const App = () => {
//   return (
//     <CounterProvider>
//             <Counter/>
//             <Parent/>
//             <Child/>
 
//     </CounterProvider>
//   )
// }

// export default App


























=======
>>>>>>> d07e9ecb7d8bae764b6429c2ded9a0cdff9fbac6
