import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2:0
    };

    console.log("User Constructor");
  }

  componentDidMount()
  {
    console.log("User ComponentDidMount");
  }

  render() {
    console.log("User Render");
    const { username, address } = this.props;
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
        <h2>User - CBC</h2>
        <h3>Username: {username}</h3>
        <h3>Address: {address}</h3>
        <h3>Count: {this.state.count}</h3>
        <button
          style={{
            padding: "10px 35px",
            border: "none",
            outline: "none",
            borderRadius: "8px",
            color: "white",
            backgroundColor: "#333",
            cursor: "pointer",
          }}
          onClick={() => {
           this.setState({count: this.state.count + 1})
          }}
        >
          Add
        </button>

        <h3>Count2: {this.state.count2}</h3>
        <button
          style={{
            padding: "10px 35px",
            border: "none",
            outline: "none",
            borderRadius: "8px",
            color: "white",
            backgroundColor: "#333",
            cursor: "pointer",
          }}
          onClick={() => {
           this.setState({count2:this.state.count2 + 10})
          }}
        >
          Increase By 10
        </button>
      </div>
    );
  }
}

export default UserClass;
