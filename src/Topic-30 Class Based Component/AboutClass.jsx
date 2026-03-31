import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutClass extends Component{
    constructor(props)
    {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount()
    {
        console.log("Parent ComponentDidMount");
    }
    
    render()
    {
        console.log("Parent Render");

        return (
            <div>
                <h1>About Class Based Component</h1>
                {/* <User username="Chombu Singh" address="Delhi" /> */}
                <UserClass username="Dinga Singh" address="UP" />
            </div>
        )
    }
}

export default AboutClass;

/**
 *  Parent Constructor
 *  Parent Render
 *  User Constructor
 *  User Render
 *  User ComponentDidMount
 *  Parent ComponentDidMount
 */