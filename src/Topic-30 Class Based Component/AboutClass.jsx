import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutClass extends Component{
    constructor(props)
    {
        super(props);
    }

   

    render()
    {

        return (
            <div>
                <h1>About Class Based Component</h1>
                {/* Function Based Component */}
                <User />

                {/* Class Based Component */}
                {/* <UserClass username="Dinga" address="UP" /> */}
                {/* <UserClass/> */}
            </div>
        )
    }
}

export default AboutClass;
