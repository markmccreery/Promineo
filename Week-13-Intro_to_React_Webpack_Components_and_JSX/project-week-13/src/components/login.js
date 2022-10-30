import React from "react";
import Navigation from "./navigation";
import Username from "./username";
import Password from "./password";
import LoginButton from "./login-button";




export default class Login extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="header">
            <Navigation />
            </div>
        <div className="card">
            <div className="card-body">
                <h3>Explore Sierra Nevada - Log In</h3>
                <Username />
                <Password /><br></br>
                <LoginButton />
            </div>
        </div>
        </div>
        )
    }
}