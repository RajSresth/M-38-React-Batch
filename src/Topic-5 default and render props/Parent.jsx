import Child from "./Child";

const Parent = () => {

    const greet = (user) => <h3>Hello {user}..!</h3>;

    const msg = () => "Namaste Dev"; 

    return <div>
        <h1>Parent Component</h1>
        <Child greet={greet}  msg={msg} />
    </div>
}

export default Parent;





















/**
 * ! Default Props
 * import Child from "./Child"

const Parent = () => {

  return (
    <div>
        <h1>Parent Component</h1>
         <Child message="Namaste Developers..🙏" username="Tinku" /> 
        <Child/>
    </div>
  )
}

export default Parent
 */