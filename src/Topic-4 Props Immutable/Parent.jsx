import Child from "./Child";


const Parent = () => {
    const person = {
        fullname: "Chombu Singh",
        age:23
    }
    return <div>
        <h1>Parent Component</h1>
        <Child  person={person}/>
    </div>
}




export default Parent;