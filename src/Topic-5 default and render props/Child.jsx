const Child = ({ greet, msg }) => {
  return (
    <div>
      <h2>Child Component</h2>
      {greet("Hemant")}
      {msg()}
    </div>
  );
};

export default Child;

/**
 * ! Default props
 
props = { message: "Namaste Developers..🙏"}
const Child = ({message = "Good Morning",username = "Chombu Singh"}) => {
   
  return (
    <div>
        <h2>Child Component</h2>
        <h3>Message: {message}</h3>
        <h3>Username:{username}</h3>
    </div>
  )
}

export default Child


const Child = ({message = "Hello Dev",username = "Simba"}) => {
    return (
    <div>
        <h2>Child Component</h2>
        <h3>Message: {message}</h3>
        <h3>Username:{username}</h3>
    </div>
  )
}


export default Child;
*/
