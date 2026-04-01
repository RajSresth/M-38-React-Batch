import React from "react";
import axios from "axios";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: "",
      loading: true
    };
    console.log("User Constructor");
  }

  componentWillUnmount()
  {
    console.log("User Unmount");
  }

  componentDidUpdate()
  {
    console.log("User ComponentDidUpdate");
  }

 async componentDidMount()
  {
    console.log("User ComponentDidMount");
      const {data} = await axios.get("https://api.github.com/users/Sarvesh-1999");
      this.setState({user : data, loading:false});      
  }

  render() {
    console.log("User Render");
    
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
       
        

      </div>
    );
  }
}

export default UserClass;
