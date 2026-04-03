import React from "react";
import axios from "axios";
import ThemeContexet from "./ThemeContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: "",
      loading: true,
      count:0
    };
    
   
  }

  async componentDidMount()
  {
    
    const {data} = await axios.get("https://api.github.com/users/Sarvesh-1999");
    this.setState({user : data, loading:false});   
     
  }
  
  render() {
   
    const {user,loading} = this.state;


    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "20px",
          border: "2px solid crimson",
          width: "400px",
          height: "fit-content",
          gap: "10px",
          marginBlock: "25px",
        }}
      >

        {
          loading ? <h1>Loading Something....</h1>:
          <>
              <h2>User - CBC</h2>
              <h3>Id: {user.id}</h3>
              <h3>Username: {user.name}</h3>
          </>
        }
       
        
          <ThemeContexet.Consumer>
           {(value) =>  <h2>Theme: {value}</h2>}
          </ThemeContexet.Consumer>
      </div>
    );
  }
}

export default UserClass;




